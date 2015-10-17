'use strict';

require.config({
    catchError: true,
    waitSeconds: 3,
    urlArgs: 'bust=' + new Date().getTime(),
    paths: {
        // Libraries
        //'history':                'modules/history-fyndit-modified',
        'bluebird': 'vendor/bluebird/bluebird.min',
        'moment': 'vendor/moment/moment.min',
        'moment-locales': 'vendor/moment/moment-with-locales.min',
        'pubsub': 'vendor/pubsub/pubsub',
        'querystring': 'vendor/query-string/query-string',
        'underscore': 'vendor/underscore/underscore-min',
        'slick': 'vendor/slick/slick.min',
        // Libraries: waypoint
        'waypoint': 'vendor/waypoints/noframework.waypoints.min',
        'waypoint_inview': 'vendor/waypoints/shortcuts/inview.min',
        'waypoint_sticky': 'vendor/waypoints/shortcuts/sticky.min',
        // Libraries: jQuery & jQuery Related
        'jquery': 'vendor/jquery/jquery.min',
        // Foundation & Foundation Related
        'foundation.core': 'vendor/foundation/foundation',
        'foundation.abide': 'vendor/foundation/foundation.abide',
        'foundation.accordion': 'vendor/foundation/foundation.accordion',
        'foundation.alert': 'vendor/foundation/foundation.alert',
        'foundation.clearing': 'vendor/foundation/foundation.clearing',
        'foundation.dropdown': 'vendor/foundation/foundation.dropdown',
        'foundation.equalizer': 'vendor/foundation/foundation.equalizer',
        'foundation.interchange': 'vendor/foundation/foundation.interchange',
        'foundation.joyride': 'vendor/foundation/foundation.joyride',
        'foundation.magellan': 'vendor/foundation/foundation.magellan',
        'foundation.offcanvas': 'vendor/foundation/foundation.offcanvas',
        'foundation.orbit': 'vendor/foundation/foundation.orbit',
        'foundation.reveal': 'vendor/foundation/foundation.reveal',
        'foundation.slider': 'vendor/foundation/foundation.slider',
        'foundation.tab': 'vendor/foundation/foundation.tab',
        'foundation.tooltip': 'vendor/foundation/foundation.tooltip',
        'foundation.topbar': 'vendor/foundation/foundation.topbar',
        'modernizr': 'vendor/foundation/modernizr',
        // Plugins
        //'async':                  'require_plugins/async',
        'domReady': 'require_plugins/domReady',
        'text': 'require_plugins/text'
    },
    shim: {
        // Libraries
        // Waypoint
        'waypoint': {
            exports: 'Waypoint'
        },
        'waypoint_inview': {
            deps: ['waypoint']
        },
        'waypoint_sticky': {
            deps: ['waypoint']
        },
        // Foundation & Foundation related
        'foundation.core': {
            deps: ['jquery', 'modernizr'],
            exports: 'Foundation'
        },
        'foundation.abide': {
            deps: ['foundation.core']
        },
        'foundation.accordion': {
            deps: ['foundation.core']
        },
        'foundation.alert': {
            deps: ['foundation.core']
        },
        'foundation.clearing': {
            deps: ['foundation.core']
        },
        'foundation.dropdown': {
            deps: ['foundation.core']
        },
        'foundation.equalizer': {
            deps: ['foundation.core']
        },
        'foundation.interchange': {
            deps: ['foundation.core']
        },
        'foundation.joyride': {
            deps: ['foundation.core', 'foundation.cookie']
        },
        'foundation.magellan': {
            deps: ['foundation.core']
        },
        'foundation.offcanvas': {
            deps: ['foundation.core']
        },
        'foundation.orbit': {
            deps: ['foundation.core']
        },
        'foundation.reveal': {
            deps: ['foundation.core']
        },
        'foundation.tab': {
            deps: ['foundation.core']
        },
        'foundation.tooltip': {
            deps: ['foundation.core']
        },
        'foundation.topbar': {
            deps: ['foundation.core']
        },
        'modernizr': {
            exports: 'Modernizr'
        }
    }
});

requirejs.onError = function (err) {
    console.info(err.requireType);
    console.info('modules: ' + err.requireModules);
    console.info(err.stack);

    //The errback, error callback
    //The error has a list of modules that failed
    // var failedId = err.requireModules && err.requireModules[0];
    // if (err.requireType === 'timeout') {
    //     console.info('timed out on', failedId);
    // }

    //throw err;
};

requirejs(["main"]);
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
