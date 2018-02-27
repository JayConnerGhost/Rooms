Template.completeMaintenanceJob.helpers({
 Job:function(){
     jobId=Session.get("selectedJobId");
     job=Maintenance.findOne({_id:jobId});
     return job;
 }
});

Template.completeMaintenanceJob.events({
    'click #complete' :function(e){
        event.preventDefault();
        comments=$('#comments').val();


          Meteor.call('updateJobStatus',([Session.get("selectedJobId"),"Completed",comments]),(err, _methodResult)=>{

              if(err){
                  alert("an error occurred marking your job as completed "+ err);
              } else
              {
                  console.log("updated");
              }
          })
        bootbox.hideAll()
    }
})


