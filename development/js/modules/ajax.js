// ajax.js: ajax wrapper
// Copyright (C) 2015  Chad Oakenfold web@oakenfold.ca
// 
// ajax.js is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

define(function(require) {
    // LIBRARIES
    var $ = require('jquery'),
        _ = require('underscore'),
        history = require('history'),
        Promise = require('bluebird'),
        pubsub = require('pubsub');

    var filename = 'ajax.js';
    console.info('@@', filename);

    /* ================================================
        Function Index
    ---------------------------------------------------
        fragment
        get_xsrf
        history_push
        history_replace
        post
        pre
        request
    ================================================ */

    Promise.onPossiblyUnhandledRejection(function(e, promise){
        // Bluebird thinks our promised() function
        // doesn't have an error handler.
        // We left that up to the callers to provide
        // then() and ultimately an error handler
        //
        // This is to supress the annoying browser "error"
    });

    var module = {
        xsrf: undefined
    };


    /* ================================================
      @@ fragment

      used with non-page loading operations, eg: share by email form submission, vote, etc
      differs from request() by:
      - not inserting response into dom, returns it instead
      - doesn't publish unload message for the current url

      fragment({
        url: 'url to get data from',//required
        data: {query string params to send to endpoint},
        type: 'get||post, if omitted defaults to get',
        dataType: 'expected data returned, if omitted defaults to html'
        // NOTE: Any other params will be ignored but returned via the promise chain. 
        // For example: it'd be useful in infinite scrolling where you would use fragment() 
        // but also need to call post() with a 'location' param to set a friendly url
      })
    ================================================ */
    function fragment(obj) {
        console.log(filename, ' > fragment', obj);
        var xsrf;

        _.defaults(obj, {
            type: 'get',
            dataType: 'html',
            data: {}
        });

        xsrf = obj.data._xsrf || get_xsrf();

        if (typeof obj.data === 'string') {
            obj.data = obj.data + '&_xsrf=' + xsrf;
        } else {
            obj.data._xsrf = obj.data._xsrf || get_xsrf();
        }

        // used with back/forward buttons to decide
        // which ajax call to use (ie: fragment vs request)
        if (obj.ajax === undefined) {
            obj.ajax = {};
        }
        obj.ajax.fragment = true;

        return new Promise(function(resolve, reject) {
            
            $.ajax(obj).done(resolve).fail(reject);

        }).then(function(chain){
            
            obj.server = chain; 
            return obj;

        }, function(error) {
            
            throw error;

        });
    }

    /* ================================================
      @@ get_xsrf

      grabs the xsrf from the hidden form field in the base html files

    ================================================ */
    function get_xsrf(){
        console.log(filename, '> get_xsrf');
        if (module.xsrf === undefined) {
            if ($('.js-xsrf input[name=_xsrf]')[0] !== undefined) {
                module.xsrf = $('.js-xsrf input[name=_xsrf]').val();
                return module.xsrf;
            } else {
                return false;
            }
        } else {
            return module.xsrf;
        }
    }


    /* ================================================
      @@ history_push
    ================================================ */
    function history_push(obj){
        console.log(filename, '> history_push');
        
        if(obj &&  obj.title && obj.location) {
            var revisionist =  $.extend(true, {}, {
                js_content: $('.js-content').html(),
                scroll_top: Number($(window).scrollTop())
            }, obj);

            history.pushState(revisionist, revisionist.title, revisionist.location);
        } else {
            console.error('Failed to update history',obj);
            console.error('obj', obj);
            console.error('obj.title', obj.title);
            console.error('obj.location', obj.location);
        }
    } 

    /* ================================================
      @@ history_replace
    ================================================ */
    function history_replace(obj){
        console.log(filename, '> history_replace');
        
        if(obj &&  obj.title && obj.location) {

            var revisionist =  $.extend(true, {}, {
                js_content: $('.js-content').html(),
                scroll_top: Number($(window).scrollTop())
            }, obj);

            history.replaceState(revisionist, revisionist.title, revisionist.location);
        } else {
            console.error('Failed to update history',obj);
            console.error('obj', obj);
            console.error('obj.title', obj.title);
            console.error('obj.location', obj.location);
        }
    }

    /* ================================================
      @@ post

        post({
            location: 'url to display to user',
            url_alias: 'used if you need to access in-page data or publish to a different url than the provided location param',
            no_scroll: false, // boolean, true prevents scrolling to top after content inserted
            no_history: false // boolean, true doesn't add a pushState
        })

        'Post' meaning after an ajax request has been made, not the html method.
        Does some common tasks after an ajax update: scroll to top, update title, etc.

        Typical ajax request pattern we are using is:
            pre();
            request({
                dataType: 'html',
                location: ...,
                type: 'get'
            }).then(function(chain){
                post(chain);
            });

    ================================================ */
    function post(obj){
        console.log(filename, '> post', obj);

        var $hash_target,
            url_hash,
            url_split, 
            url_pathname,
            search,
            url_alias,
            inline_page_data,
            title = 'Fyndit',
            window_scroll_vert = 0;


        // used with back/forward buttons to decide
        // which ajax call to use (ie: fragment vs request)
        if (obj.ajax === undefined) {
            obj.ajax = {};
        }
        obj.ajax.post = true;

        if (obj.location.match(/\?/gi)) {
            url_split = obj.location.split('?'); 
            url_pathname = url_split.shift();
            search = url_split.join('?');
            obj.pathname = url_pathname;
            obj.search = search;
        } else {
            obj.pathname = obj.location;
        }

        if (obj.no_scroll === undefined || obj.no_scroll === false) {
            //see if has hash
            url_hash = obj.location.split('#');

            if (url_hash[1] !== undefined) {
                $hash_target = $('#' + url_hash[1].split('?')[0]);

                if (url_hash.length === 2 && $hash_target[0]) {
                    window_scroll_vert = $hash_target.position().top  - $('.js-header').outerHeight();
                }
            }

            window.scrollTo(0, window_scroll_vert);
        }
 
        url_alias = obj.url_alias || obj.pathname;

        //update page specific data/markup
        if (FyndIt && FyndIt.page && FyndIt.page[url_alias]) {
            inline_page_data = FyndIt.page[url_alias];

            if (inline_page_data.page.title) {
                // Title
                title = inline_page_data.page.title;
            }

        }

        //update title
        document.title = title;

        if (obj.no_history === undefined || obj.no_history === false) {
            // add a history record
            obj.title = title;

            if (obj.replace) {
                history_replace(obj);
            } else {
                history_push(obj);
            }
        }

        // send message that gets lighthouse-location.js to process any url changes
        pubsub.publish('lighthouse.location');
        pubsub.publish('lighthouse.search');
        
        // let url listeners know of update
        pubsub.publish('ajax.load', obj.pathname);

        $(document).foundation();
        $(document).foundation('tooltip', 'reflow');

        return obj;
    }

    /* ================================================
      @@ pre
        
        Called before an ajax request.
        Not certain of it's usefulness

        Typical ajax request pattern we are using is:
            pre();
            request({
                dataType: 'html',
                location: ...,
                type: 'get'
            }).then(function(chain){
                post(chain);
            });
    ================================================ */
    function pre(){
        console.log(filename, '> pre');

        //notify listeners of pending unload/update
        pubsub.publish('ajax.pre', {
            location: window.location
        });

        //sticky.event_binding_off();
        //sticky.disable_all();
    }

    /* ================================================
      @@ request

      updates the dom
      
      request({
        location: "url to display to user",
        endpoint: "url to get data from, if omitted will use location",
        data: {query string params to send to endpoint}
        type: "get||post, if omitted defaults to get",
        dataType: "expected data returned, if omitted defaults to html",
        url_alias: 'used if you need to access in-page data or publish to a different url than the provided location param'
      })
    ================================================ */
    function request(obj) {
        console.log(filename, ' > request', obj);

        //if (obj.endpoint === '/members/profile/edit//') { debugger; }

        if (obj.location === undefined && obj.endpoint === undefined) {
            console.error('Missing required location and/or endpoint params!');
            return;
        }

        _.defaults(obj, {
            type: 'get',
            dataType: 'html',
            data: {}
        });

        obj.url = (obj.endpoint || obj.location);
        obj.data._xsrf = obj.data._xsrf || get_xsrf();

        // used with back/forward buttons to decide
        // which ajax call to use (ie: fragment vs request)
        if (obj.ajax === undefined) {
            obj.ajax = {};
        }
        obj.ajax.request =  true;


        return Promise.resolve($.ajax(obj)).then(function(chain) {
            var has_content;

            //check for base.html/empty content...
            has_content = $(chain).filter('.js-container').find('.js-content');
            if (has_content[0]) {
                chain = has_content.html();
            }

            pubsub.publish('ajax.unload', window.location.pathname + '');

            // Update dom
            $('.js-content').html(chain);

            // Save markup/response
            obj.server = chain; 
            
            return obj;

        }, function(error) {
            //There was an issue/error
            pubsub.publish('ajax.error', {
                'location': window.location
            });
        });
    }

    //Run on file load
    // ------------------------
    (function () {
        get_xsrf();
    })();

    // To export
    // ------------------------
    return {
        fragment: fragment,
        get_xsrf: get_xsrf,
        history_push: history_push,
        history_replace: history_replace,
        post: post,
        pre: pre,
        request: request
    };
});