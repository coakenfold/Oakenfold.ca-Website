define(['pubsub',
    'underscore'],
function(pubsub,
    _) {
/* --------------------------------------------------- */

    var filename = 'lighthouse.js';
    console.info('@@', filename);
    
    /* ================================================
        Function Index
    ---------------------------------------------------
        initialize
        initialize_module_data
        pubsub_lighthouse_register
        pubsub_lighthouse_resume
        pubsub_subscribe
        pubsub_unsubscribe
        register_key
        search_end
        search_key
        search_keys
    ================================================ */

    // Module vars
    var module = {};


    /* ================================================
      @@ initialize
    ================================================ */
    function initialize(obj){
        // console.log(filename, ' > initialize');

        initialize_module_data(obj);

        pubsub_unsubscribe();
        pubsub_subscribe();
    }

    /* ================================================
      @@ initialize_module_data
    ================================================ */
    function initialize_module_data(){
        // console.log(filename, '> initialize_module_data');

        module.keys = [];
        
        module.search = {
            pointer: -1,
            response: {
                timeout: undefined,
                timer: 50
            }
        };
        
        module.subscription = {
            token: {
                register: undefined,
                resume: undefined
            },
            topic: {
                register: 'lighthouse.register',
                found: 'lighthouse.found',
                resume: 'lighthouse.resume'
            }
        };
    }

    /* ================================================
      @@ pubsub_subscribe
    ================================================ */
    function pubsub_subscribe(){
        // console.log(filename, '> pubsub_subscribe');

        module.subscription.token.register = pubsub.subscribe(module.subscription.topic.register, pubsub_lighthouse_register);
        module.subscription.token.resume = pubsub.subscribe(module.subscription.topic.resume, pubsub_lighthouse_resume);
    }

    /* ================================================
      @@ pubsub_unsubscribe
    ================================================ */
    function pubsub_unsubscribe(){
        // console.log(filename, '> pubsub_unsubscribe');

        pubsub.unsubscribe(module.subscription.token.register);
        pubsub.unsubscribe(module.subscription.token.resume);
    }

    /* ================================================
      @@ pubsub_lighthouse_register
    ================================================ */
    function pubsub_lighthouse_register(msg, data) {
        // console.log(filename, ' > pubsub_lighthouse_register');
        if (data !== undefined) {
            register_key(data);
        }
    }

    /* ================================================
      @@ pubsub_lighthouse_resume
    ================================================ */
    function pubsub_lighthouse_resume() {
        // console.log(filename, ' > pubsub_lighthouse_resume');

        //clear timeout
        clearTimeout(module.search.response.timeout);

        search_keys();
    }

    /* ================================================
      @@ register_key
    ================================================ */
    function register_key(obj){
        // console.log(filename, '> register_key', obj);

        //add if not in keys
        if (_.contains(module.keys, obj) === false) {
            module.keys.push(obj);
            search_end();
            search_keys();
        }
    }

    /* ================================================
      @@ search_end
    ================================================ */
    function search_end(){
        // console.log(filename, '> search_end');

        //clear timeout
        clearTimeout(module.search.response.timeout);

        //reset index
        module.search.pointer = -1;
    }

    /* ================================================
      @@ search_keys
    ================================================ */
    function search_keys(){
        // console.log(filename, '> search_keys');

        if (module.keys.length > 0) {
            //if current index is not @ length
            if (module.search.pointer < module.keys.length - 1) {
                //increment pointer
                module.search.pointer += 1;

                //run search
                search_key();

            }
        }
    }

    /* ================================================
      @@ search_key
    ================================================ */
    function search_key(){
        // console.log(filename, '> search_key');

        //check dom
        if (module.keys[module.search.pointer] !== undefined && $(module.keys[module.search.pointer])[0] !== undefined) { 
            //clear timeout
            clearTimeout(module.search.response.timeout);
            
            //set timeout
            module.search.response.timeout = setTimeout(search_keys, module.search.response.timer);
            
            //notify listeners of discovery
            pubsub.publish(module.subscription.topic.found, module.keys[module.search.pointer]);
        } else {
            // didn't find anything
            if (module.search.pointer < module.keys.length) {
                // or move on to next
                search_keys();
            } else {
                // stop search/reset pointer if at end...
                search_end();
            }
        }

    }

    /* ================================================
      @@ search_new
    ================================================ */
    function search_new(){
        // console.log(filename, '> search_new');
        search_end();
        search_keys();
    }


    //Run on file load
    // ------------------------
    (function () {
        initialize();
    })();


    // To export
    // ------------------------
    return {
        search_keys: search_keys,
        search_end: search_end,
        search_new: search_new
    };
});