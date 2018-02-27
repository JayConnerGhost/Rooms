Template.viewMaintenanceJob.onRendered(function(){


});

Template.viewMaintenanceJob.helpers({

Job:function(){
    jobId=Session.get("selectedJobId");
    job=Maintenance.findOne({_id:jobId});
    return job;

}


});