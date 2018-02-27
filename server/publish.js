// in server/publish.js
Meteor.publish(null, function () {
    return Meteor.roles.find({})
});

Meteor.publish('userList', function () {
    return Meteor.users.find({});
});

Meteor.publish('maintenancePriorities',function(){
    return maintenancePriorities.find({});
})


Meteor.publish('maintenanceRisks',function(){
    return maintenanceRisks.find({});
})

Meteor.publish('Maintenance', function(){
    return Maintenance.find({});
})