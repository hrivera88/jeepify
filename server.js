var path = require('path');
var express = require('express');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization');
    next();
});
app.use(cookieParser());

var client_id = 'cd39b3f0e0f04eaa8e697d1be81d015f'; // Your client id
var client_secret = 'cd8e68cc308d4d039889b4de78634362'; // Your secret
var redirect_uri = 'http://localhost:8082/callback/'; // Your redirect uri

var port = process.env.PORT || 8082;

var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;

};

var stateKey = "spotify_auth_state";

app.get('/login', spotifyLogin);

function spotifyLogin(req, res) {

    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' + querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
    }));

}

app.get('/callback', spotifyCallback);

function spotifyCallback(req, res) {

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' + querystring.stringify({
            error: 'state_mismatch'
        }));
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        req.post(authOptions, function(error, res, body) {
            if(!error && res.statusCode === 200) {
                var access_token = body.access_token;
                var refresh_token = body.refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: {'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                req.get(options, function(err, res, body) {
                    console.log(body);
                });

                res.redirect('/#' + querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token
                }));

            } else {

                res.redirect('/#' + querystring.stringify({
                    error: 'invalid_token'
                }));
            }
        });
    }
}

app.get('/refresh_token', spotifyRefresh);

function spotifyRefresh(req, res) {

    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer( client_id  + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    req.post(authOptions, function(err, res, body) {
        if (!err && res.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });

}

// app.get('/hello', helloFunc);

// function helloFunc(req, res) {
//     res.send('Hi There');
// }

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + server.address().port);
});
