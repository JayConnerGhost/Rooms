Meteor.publish('roomsList', function () {
    return RoomsList.find({});
});