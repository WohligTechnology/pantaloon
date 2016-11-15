global["GoogleKey"] = "AIzaSyATpxYDbEGF_Lig9U8KYWv9pLuxW0dU9lw";
global["GoogleclientId"] = "980997541474-nlrvr48lhntod885dvk1kmkuo65unnes.apps.googleusercontent.com";
global["GoogleclientSecret"] = "8LdOPIGYWiq25L3fUgkJmtA9";

passport.use(new GoogleStrategy({
        clientId: GoogleclientId,
        clientSecret: GoogleclientSecret,
        callbackURL: global["env"].realHost + "/api/user/loginGoogle",
        accessType: "offline"
    },
    function (accessToken, refreshToken, profile, cb) {
        profile.googleAccessToken = accessToken;
        profile.googleRefreshToken = refreshToken;
        return cb(profile);
    }
));