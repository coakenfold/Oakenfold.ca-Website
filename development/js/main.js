define(['jquery',
        'querystring',
        'polyfiller', 
        'modules/ajax',
        'modules/history-interface',
        'modules/lighthouse'],
    function($,
             querystring,
             pollyfiller,
             ajax,
             history_interface,
             lighthouse) {
// ................................................
// ================================================

    var filename = 'main.js';
    console.info('@@', filename);


    pollyfiller.setOptions('waitReady', false); 
        
    pollyfiller.setOptions('forms-ext', {
        replaceUI: 'auto',
        'widgets': {
            'startView': 2,
            'classes': 'hide-btnrow'
        }
    });
    
    pollyfiller.setOptions('forms', {
        //instant validation options
        iVal: {
            //a simple selector of your form element[s]
            //'sel': '.ws-validate', 
            //wether webshim should show a bubble on invalid event: 'hide' | true | false
            //'handleBubble': 'hide', 

            //selector or function to find the wrapper of the form field[s] (if there are more than one form field in the wrapper they will be handled as a group with one combined errormessage)
            //'fieldWrapper': ':not(span):not(label):not(em):not(strong):not(p)',

            //wether an invalid input should be re-checked while user types
            'recheckDelay': 400,

            //in case a developer has set novalidate attribute to a form element and wants the form validated on submit, this should be set to true
            //'submitCheck': false,

            //Events to check for validity/update validation UI
            'events': 'focusout change', //Note: The 'invalid' and 'updatevalidation' events will be always used

            //the class of the errorbox, which is normally appended to the fieldWrapper
            'errorBoxClass': 'form__error-msg-container',

            //classes to adjust to your CSS/CSS-framework
            'errorMessageClass': 'form__error-msg',
            'errorWrapperClass': 'form__error-set',
            'successWrapperClass': 'form__success-set',

            //show/hide effect: 'no' | 'slide' | 'fade'
            'fx': 'slide'
        }
    });
    
    // pollyfiller.setOptions('geolocation', {
    //     confirmText: '{location} wants to know your position. It is Ok to press Ok.'
    // });

    pollyfiller.polyfill('forms forms-ext geolocation');

// ================================================
// ................................................
    }
);