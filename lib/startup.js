
// 1/3. Code to define global variables representing access to database collections
geographicAdministrativeLevelLabel = new Mongo.Collection("geographicAdministrativeLevelLabel");

if (Meteor.isClient) {
    console.log("Este es codigo del lado del cliente");
    // 3/3. Access to server side published data from client (MiniMongo mirrored sub-copy)
    geographicAdministrativeLevelLabelHandle = Meteor.subscribe("geographicAdministrativeLevelLabel");
}
else if (Meteor.isServer) {
  Meteor.startup(function () {
      console.log("Este es codigo del lado del servidor");
  });
}


