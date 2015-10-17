define(function(require) {
    // Requirements
    var $ = require('jquery'),
        _ = require('underscore'),
        ajax = require('./ajax'),
        history = require('history'),
        Promise = require('bluebird'),
        pubsub = require('pubsub');

    var filename = 'history-interface.js';
    console.info('@@', filename);

    /* ================================================
        Function Index
    ---------------------------------------------------
        event_binding_off
        event_binding_on
        event_popstate
        initialize
    ================================================ */


    // Module vars
    var location = window.history.location || window.location; // History library requirement?
    

    /* ================================================
    @@ event_binding_off
    ================================================ */
    function event_binding_off() {
        console.log(filename, ' > event_binding_off');

        $(window).off('popstate.fyndit-popstate', event_popstate);
    }
    
    /* ================================================
    @@ event_binding_on
    ================================================ */
    function event_binding_on() {
        console.log(filename, ' > event_binding_on');

        $(window).on('popstate.fyndit-popstate', event_popstate);
    }

    /* ================================================
      @@ event_popstate
    ================================================ */
    function event_popstate(e){
        console.error(filename, '> event_popstate');

        var popstate_data = {};

        if (e.originalEvent.state === null) {
            //console.info(filename, '> event_popstate: issuing a new request!');
            ajax.pre();
            ajax.request({
                location: location.pathname,
                no_history: true
            }).then(function(chain){
                ajax.post(chain);
            });
        } else {
            //console.info(filename, '> event_popstate: using saved .state data, could use cache but currently issuing new requests');
            popstate_data = e.originalEvent.state;
            popstate_data.no_history = true;

            // TODO: USE SAVED RESPONSE FROM SERVER?
            if (e.originalEvent.state.dataType === 'html' && e.originalEvent.state.server) {
                // could inject saved content BUT there are some pages
                // that aren't replacing .js-content but a child  within it
                // need to fix it to ALWAYS REPLACE .js-content?
            }
            
            // QUESTION: ignore fragment requests since they don't have a predictable target that'll be updated?

            if (popstate_data.ajax === undefined || popstate_data.ajax.request) {
                ajax.pre();
                ajax.request(popstate_data).then(function(chain){
                    ajax.post(chain);
                });
            }
            if (popstate_data.ajax.fragment) {
                if (popstate_data.js_content) {
                    $('.js-content').html(popstate_data.js_content);
                    if (popstate_data.scroll_top) {
                        setTimeout(function(){
                            window.scrollTo(0, popstate_data.scroll_top);
                        }, 50);
                        
                    }
                } else {
                     ajax.fragment(popstate_data).then(function(chain){
                         ajax.post(chain);
                     });
                }
            }
        }

    }

    /* ================================================
    @@ initialize
    ================================================ */
    function initialize(obj) {
        console.log(filename, ' > initialize', obj);
        event_binding_off();
        event_binding_on();
    }



    // To export
    // ------------------------
    return {
        initialize: initialize
    };
});