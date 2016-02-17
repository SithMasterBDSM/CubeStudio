Meteor.startup(function () {
    Meteor.methods({
        getFacebookAccessToken: function(uid)
        {
            try {
                var user;
                user = Meteor.users.findOne(uid);
                if ( !valid(user) ) {
                    return "NO DISPONIBLE";
                }
                var at;
                at = user.services.facebook.accessToken;
                if ( !valid(at) ) {
                    return "NO DISPONIBLE";
                }
                return at;
            }
            catch( e ) {
                return "NO DISPONIBLE";
            }
        }
    });
});
