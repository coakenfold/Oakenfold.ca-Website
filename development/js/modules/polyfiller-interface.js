define(['jquery',
        'polyfiller'],
    function($,
        polyfiller) {
/* --------------------------------------------------- */

    var filename = 'polyfiller-interface.js';
    console.info('@@', filename);

    /* ================================================
        Function Index
    ---------------------------------------------------
      initialize
      set_options
    ================================================ */


    /* ================================================
    @@ initialize
    ================================================ */
    function initialize(obj) {
        console.log(filename, ' > initialize', obj);

        set_options();
    }
    /* ================================================
    @@ set_options
    ================================================ */
    function set_options() {
        console.log(filename, ' > set_options');

        polyfiller.setOptions('waitReady', false);
        
        polyfiller.setOptions('forms-ext', {
            replaceUI: 'auto',
            'widgets': {
                'startView': 2,
                'classes': 'hide-btnrow'
            }
        });
        
        polyfiller.setOptions('forms', {
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
        
        // webshim.setOptions('geolocation', {
        //     confirmText: '{location} wants to know your position. It is Ok to press Ok.'
        // });

        polyfiller.polyfill('forms forms-ext geolocation');
    }
    


    // To export
    // ------------------------
    return {
        initialize: initialize
    };
});