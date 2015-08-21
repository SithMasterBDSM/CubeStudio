// counter starts at 0
Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});

Template.dynamicCodeTest.helpers({
  calculateName: function (param1) {
    return "Hola mundo bizarro de JS + Spacebars: <b>" + param1 + "</b>";
  }
});

Template.dynamicCodeTest.helpers({
  binaryTest: function () {
    var value;

    value = Session.get('counter');
    if ( value == 5 ) {
      return true;
    }
    return false;
  }
});

Template.dynamicCodeTest.helpers({
  dbGeographicAdministrativeLevelLabel: function (param1) {
    return geographicAdministrativeLevelLabel.find();
  }
});
