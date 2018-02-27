Meteor.methods({
    "AddUserToAdmin": function (userId) {
        try {
            Roles.addUsersToRoles(userId, ['admin']);
            return "success"
        }
        catch (err) {
            return err;
        }
    }
});

Meteor.methods({
    "AddUserToSystemAdmin": function (userId) {
        try {
            Roles.addUsersToRoles(userId, ['systemAdmin']);
            return "success"
        }
        catch (err) {
            return err;
        }
    }
});


Meteor.methods({
    "AddUserToStaff": function (userId) {
        try {
            Roles.addUsersToRoles(userId, ['staff']);
            return "success"
        }
        catch (err) {
            return err;
        }
    }
});

Meteor.methods({
    "RemoveUserFromStaff": function (userId) {
        try {
            Roles.removeUsersFromRoles(userId,['staff']);
            return "success";
        }
        catch (err){
            return err;
        }

    }
});



Meteor.methods({
    "RemoveUserFromSystemAdmin":function(userId){
        try {
            Roles.removeUsersFromRoles(userId,['systemAdmin']);
            return "success";
        }
        catch (err){
            return err;
        }
    }
});

Meteor.methods({
   "RemoveUserFromAdmin": function(userId){
       try {
           Roles.removeUsersFromRoles(userId,['admin']);
           return "success";
       }
       catch (err){
           return err;
       }
   }

});