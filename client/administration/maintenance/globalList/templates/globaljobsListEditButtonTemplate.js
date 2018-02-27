Template.globaljobsListEditButtonTemplate.events({
    'click #editJob' :function(e,t){
        console.log(this._id);
        Session.set("selectedJobId", this._id);
        Session.set("SelectedJob",this);
        mbox.dialog({
            message:Template.editMaintenanceJob,
            data: function(){
                return {
                    jobID:Session.get("selectedJobId")

                }
            }

        });
    },
});