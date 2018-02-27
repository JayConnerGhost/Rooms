Template.createUser.events({
    'submit form': function(event) {
        event.preventDefault();
        var email = $('[name=loginEmail]').val();
        var password = $('[name=loginPassword]').val();
        var firstName=$('[name=firstName]').val();
        var lastName=$('[name=lastName]').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                firstName: firstName,
                lastName: lastName
            }
        });
        Router.go('home');
    }
});

