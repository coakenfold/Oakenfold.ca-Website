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

        return reply.file('./development/html/'+request.params.top);
        // return reply('You asked for ' +
        //     (request.params.secondary ? request.params.secondary + ' from ' : '') +
        //     request.params.top);
    };

    var getMedia = function (request, reply) {

        return reply.file('./development/media/'+request.params.top);
        // return reply('You asked for ' +
        //     (request.params.secondary ? request.params.secondary + ' from ' : '') +
        //     request.params.top);
    };

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./development/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/content/',
        handler: function (request, reply) {
            return reply.file('./development/html/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/media/{top}',
        handler: getMedia
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