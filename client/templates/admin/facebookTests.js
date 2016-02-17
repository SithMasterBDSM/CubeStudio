Router.route("/facebookTests", {
    name: "facebookTests",
    template: "facebookTests",
    data: function(){
    }
});

facebookAccessToken = null;

Template.facebookTests.events({
    "click #fbtest": function(event, template)
    {
        event.preventDefault();
        console.log("Intentando realizar operaciones con facebook:");

        Meteor.call("getFacebookAccessToken", Meteor.userId(), function(e, facebookAccessToken){
            if ( !valid(e) && valid(facebookAccessToken) ) {
                console.log("  - AccessToken: " + facebookAccessToken);

                if ( facebookAccessToken === "NO DISPONIBLE" ) {
                    console.log("  - Deteniendo el proceso");
                    return;
                }

                HTTP.get(
                    "https://graph.facebook.com/me", 
                    {
                        params: {access_token: facebookAccessToken}
                    }, 
                    function(e, r) {
                        console.log("  - Información básica del usuario activo:");
                        console.log("    . " + JSON.stringify(r.data));
                    }
                );
                
                HTTP.get(
                    "https://graph.facebook.com/me/friends",
                    {
                        params: {access_token: facebookAccessToken}
                    },
                    function(e, r) {
                        console.log("  - Listado de amigos que ya usan la aplicación CubeStudio:");
                        console.log("    . " + JSON.stringify(r.data));
                    }
                );

                HTTP.get(
                    "https://graph.facebook.com/me/groups",
                    {
                        params: {access_token: facebookAccessToken}
                    },
                    function(e, r) {
                        console.log("  - Grupo de catadores:");
                        console.log("    . " + JSON.stringify(r.data));
                    }
                );

                //console.log("  - Ejecución de operación de envío de mensaje de recomendación:");
                //FB.ui({
                //    method: 'send',
                //    link: 'http://www.cubestudio.co',
                //});
            }
        });
    }
});
