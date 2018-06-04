
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 |
 */
module.exports = {
    "ui": {
        "port": 3001
    },
    "files": ["public/index.html"],
    "watchEvents": [
        "change"
    ],
    "watch": true,
    "server": "public",
    "port": 3000,
    "open": "local",
    "notify": false
};