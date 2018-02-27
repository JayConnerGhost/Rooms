Meteor.publish('residents', function () {
    return Residents.find({});
});
