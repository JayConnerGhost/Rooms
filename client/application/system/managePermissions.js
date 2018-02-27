Template.selectUserTemplate.onCreated(function(){

});

Template.selectUserTemplate.helpers({
   user: function() {

        return Meteor.users.find();
    }
});

Template.selectUserTemplate.events({

    'change  #userSelect': function(event, template) {
        event.preventDefault();
        var selected_value = $(event.target).val();
        Session.set('userSelected', selected_value);
    }
});

Template.permissionsTemplate.events({

   "click #btnAdmin": function(event){
       event.preventDefault();
       Meteor.call('AddUserToAdmin', Session.get('userSelected'), (err, result) => {
           if (err) {
               alert(err);
           }
           else {
               alert(result);
           }

       });
   },

    "click #btnStaff":function(event){
        event.preventDefault();
        Meteor.call('AddUserToStaff', Session.get('userSelected'), (err, result) => {
            if (err) {
                alert(err);
            }
            else {
                alert(result);
            }

        });
    },

    "click #btnSystemAdmin":function(event){
        event.preventDefault();
        Meteor.call('AddUserToSystemAdmin', Session.get('userSelected'), (err, result)=>{
            if (err) {
                alert(err);
            }
            else {
                alert(result);
            }


        })
    },
    "click #btnRemovesystemAdmin":function(event){
        event.preventDefault();
        Meteor.call('RemoveUserFromSystemAdmin', Session.get('userSelected'), (err, result)=>{
            if (err) {
                alert(err);
            }
            else {
                alert(result);
            }


        })
    },

    "click #btnRemoveadmin":function(event){
        event.preventDefault();
        Meteor.call('RemoveUserFromAdmin', Session.get('userSelected'), (err, result)=>{
            if (err) {
                alert(err);
            }
            else {
                alert(result);
            }


        })
    },

    "click #btnRemovestaff":function(event){
        event.preventDefault();
        Meteor.call('RemoveUserFromStaff', Session.get('userSelected'), (err, result)=>{
            if (err) {
                alert(err);
            }
            else {
                alert(result);
            }


        })
    }

});


Template.permissionsTemplate.roles = function() {
console.log("in func");
    userId=Session.get('userSelected');

    return Roles.getRolesForUser(userId);
};