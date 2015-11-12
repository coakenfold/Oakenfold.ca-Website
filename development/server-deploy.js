var Hapi = require('hapi');
var Good = require('good');


var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(require('inert'), function (err) {

    if (err) {
        throw err;
    }

    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: function (request, reply) {
    //         reply('Hello, world!');
    //     }
    // });

    var getContent = function (request, reply) {

        return reply.file('./deploy/html/'+request.params.top);
        // return reply('You asked for ' +
        //     (request.params.secondary ? request.params.secondary + ' from ' : '') +
        //     request.params.top);
    };

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./deploy/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/html',
        handler: function (request, reply) {
            reply.file('./deploy/html.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/css/{file}',
        handler: function (request, reply) {
            reply.file('./deploy/css/'+request.params.file);
        }
    });

    server.route({
        method: 'GET',
        path: '/js/{file}',
        handler: function (request, reply) {
            reply.file('./deploy/js/'+request.params.file);
        }
    });

    server.route({
        method: 'GET',
        path: '/media/svg/{file}',
        handler: function (request, reply) {
            reply.file('./deploy/media/svg/' + request.params.file); 
        }
    });

    server.route({
        method: 'GET',
        path: '/content/',
        handler: function (request, reply) {
            return reply.file('./deploy/html/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/content/{top}',
        handler: getContent
    });

    
    server.register({
        register: Good,
        options: {
            reporters: [{
                reporter: require('good-console'),
                events: {
                    response: '*',
                    log: '*'
                }
            }]
        }
    }, function (err) {
        if (err) {
            throw err; // something bad happened loading the plugin
        }

        server.start(function () {
            server.log('info', 'Server running at: ' + server.info.uri);
        });
    });
});