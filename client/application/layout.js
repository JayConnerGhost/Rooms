Template.nav.events({
    'click #logout': function(event) {
        alert("logout");
        event.preventDefault();
        Meteor.logout();
    }
});