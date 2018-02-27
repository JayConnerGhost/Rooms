Template.editMaintenanceJob.helpers({

    location: function () {
        return Locations.find({});
    },

    locationSelected: function () {
         if ((Session.get('SelectedJob').location_id)=== this.key) {
             return "selected"
         }
    },

    room: function(){
          return RoomsList.find({ key: (Session.get('SelectedJob').location_id) });
    },

    roomSelected: function() {

        var roomIdRaw=Session.get('SelectedJob').room_id;

        var room_IdTrimmed=roomIdRaw.replace('ObjectID("','').replace('")','');

        if((room_IdTrimmed)===this._id._str){
            return "selected"
        }
    },
    staff: function() {
        users= Roles.getUsersInRole("staff").fetch();
        return users;
    },

    staffSelected: function(){

       var name=this.profile.firstName+" "+ this.profile.lastName;
       if((Session.get('SelectedJob').reporting_staff)===name){
           return "selected"
       }

    },

    assignedStaff: function(){
        users= Roles.getUsersInRole("staff").fetch();
        return users;
    },

    staffAssigned: function() {
        var name=this.profile.firstName+" "+ this.profile.lastName;
        if((Session.get('SelectedJob').assignedTo)===name){
            return "selected"
        }
    },

    priority: function() {
        priorities=maintenancePriorities.find({});
        return priorities;
    },

    prioritySelected: function(){
        var priorityIdRaw=Session.get('SelectedJob').priority_Id;
        var priority_IdTrimmed=priorityIdRaw.replace('ObjectID("','').replace('")','');

        if((priority_IdTrimmed===this._id._str)){
            return "selected"
        }

    },

    risk: function(){
        risks=maintenanceRisks.find({});
        return risks;
    },

    selectedRisk: function(){
      var riskIdRaw=Session.get('SelectedJob').risk_id;
      var risk_IdTrimmed=riskIdRaw.replace('ObjectID("','').replace('")','');

      if((risk_IdTrimmed===this._id._str)){
          return "selected"
      }
    },

    currentDescription: function(){
      return Session.get('SelectedJob').description;

    },

    currentComments: function(){
        return Session.get('SelectedJob').comments;
    }


});

Template.editMaintenanceJob.events({
   'click #save': function(e,t){
       e.preventDefault();
       //risk
       var risk_id=$('#riskSelect').val();
       var risk_text=$("#riskSelect :selected").text();
       //location
       var location_text =$("#locationSelect :selected").text();
       var location_id=$('#locationSelect :selected').val();
       //room
       var room_id=$('#roomSelect :selected').val();
       var room_text=$("#roomSelect :selected").text();
       //reporting staff
       var reportingStaff_id=$('#reportingStaff :selected').val();
       var reportingStaff_text= $("#reportingStaff :selected").text();
       //assigned staff
       var assignedStaff_id=$('#assignmentSelect :selected').val();
       var assignedStaff_text= $("#assignmentSelect :selected").text();
       //priority
       var priority_id=$('#prioritySelect :selected').val();
       var priority_text= $("#prioritySelect :selected").text();
       var comments = $('[name=comments]').val();
       var description= $('[name=description]').val();
       var status="Assigned";
       var id=Session.get('SelectedJob')._id;
       values =[id, risk_id,risk_text,location_id,location_text, room_id, room_text, reportingStaff_id, reportingStaff_text, assignedStaff_id, reportingStaff_text, assignedStaff_id, assignedStaff_text, priority_id, priority_text, comments, description, status];

//TODO set up server side update method

//console.log("->" + id);

       Meteor.call('updateMaintenanceItem',values,(err, result)=>{
           if(err){
               alert("error occurred submitting form " + err)
           }else
           {
               console.log("updated")
           }
           Router.go('globaljobsList');
       })

   }
});