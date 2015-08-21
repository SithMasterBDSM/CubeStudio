console.log("PUBLICANDO COLECCIONES MONGODB A MINIMONGO");

// 2/3. Code to publish MongoDB information from server
Meteor.publish(
    "geographicAdministrativeLevelLabel", function() {
        return geographicAdministrativeLevelLabel.find();
    }
);
