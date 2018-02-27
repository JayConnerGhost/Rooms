
Template.todo.onRendered(function (){
     this.$('#locationSelect').val($("#locationSelect option:first").val());
     Session.set('locationSelected', $("#locationSelect option:first").val());
     $("#roomSelect").attr("disabled", true);

});



Template.adminMaintenanceAssignmentDetails.helpers({
    location: function () {
        return Locations.find({});
    },
    locationSelected: function () {
        if (Session.get('locationSelected') === this.key) {
            return "selected"
        }
    },

    room: function(){
        $("#roomSelect").attr("disabled", false);
        return RoomsList.find({ key: Session.get('locationSelected') });
    },

    roomSelected: function() {
        if(Session.get('roomSelected')===this._id){
            return "selected"
        }
    },

    roomNumber: function(){
        return this.ROOMNumber;
    },

    staff: function() {
        users= Roles.getUsersInRole("staff").fetch();
        return users;
    },

    assignedStaff: function(){
        users= Roles.getUsersInRole("staff").fetch();
        return users;
    },

    priority: function() {
        priorities=maintenancePriorities.find({});
        return priorities;
    },

    risk: function(){
        risks=maintenanceRisks.find({});
        console.log(risks);
        return risks;
    }

});

Template.adminMaintenanceAssignmentDetails.events({
    'change  #locationSelect': function (event, template) {
        event.preventDefault();
        var selected_value = $(event.target).val();
        Session.set('locationSelected', selected_value);
    },

    'change #roomSelect': function (e,t){
        e.preventDefault();
        var selected_value=$(e.target).val();
        Session.set('roomSelected',selected_value);
    }

});
