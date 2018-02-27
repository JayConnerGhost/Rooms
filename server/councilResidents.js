Meteor.publish('councilResidents_pt', function () {
    return councilResidentsPT.find({});
});

Meteor.publish('councilResidents_bt', function () {
    return councilResidentsBT.find({});
});

Meteor.publish('councilResidents_h', function () {
    return councilResidentsH.find({});
});