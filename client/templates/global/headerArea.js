Template.headerArea.helpers({
    userIsLoggedIn: function()
    {
        if ( valid(Meteor.userId()) ) {
            return true;
        }
        return false;
    }
});

Template.headerArea.events({
    "click #loginWithFacebook": function(event, template)
    {
        event.preventDefault();
        return Meteor.loginWithFacebook(
            {requestPermissions: ["email", "public_profile", "user_friends"]}, 
            function( error ) {
                if ( valid(error) ) {
                    console.log("Error on click #loginWithFacebook: " + error);
                }
                else {
                    console.log("Logged in with Meteor user id: " + Meteor.userId());
                }
            }
        );
    },
    "click #logout": function(event, template)
    {
        console.log("Logged out from system");
        Meteor.logout();
    }
});
