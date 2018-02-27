if (Meteor.isClient) {
    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var email = $('[name=loginEmail]').val();
            var password = $('[name=loginPassword]').val();
            Meteor.loginWithPassword(email, password, function(err) { alert(err); });

        },
    });
}