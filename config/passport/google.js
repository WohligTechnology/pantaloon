global["GoogleKey"] = "AIzaSyATpxYDbEGF_Lig9U8KYWv9pLuxW0dU9lw";
global["GoogleclientId"] = "303439552643-no8tbln6he1q9nka7idmtij4i341lu47.apps.googleusercontent.com";
global["GoogleclientSecret"] = "zBUHF5vz0wvIBVq2yenqzruV";

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