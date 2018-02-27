Template.todoList.helpers({
  // return Meteor.user().profile.first_name;
tasks: function(){

    user_id=Meteor.user()._id;

    assignedTasks=Maintenance.find({assignedStaff_id: user_id}).fetch();
return assignedTasks;
}
});