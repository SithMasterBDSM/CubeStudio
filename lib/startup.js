if (Meteor.isClient) {
    console.log("Este es codigo del lado del cliente");
}
else if (Meteor.isServer) {
  Meteor.startup(function () {
      console.log("Este es codigo del lado del servidor");
  });
}
console.log("Este es codigo comun");
