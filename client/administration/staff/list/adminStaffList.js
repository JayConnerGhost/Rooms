



users =Roles.getUsersInRole("staff");
Template.adminStaffList.helpers({
    settings: function () {
        return {
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {key: 'emails.0.address', label: 'Users Email'},
                {key: 'profile.firstName', label: 'Users First Name'},
                {key: 'profile.lastName', label: 'Users Last Name'},
                {key: 'roles', label: 'Users Roles'},

            ],
        };
    },
});

Template.adminStaffList.tables = function() {
    return users;
};