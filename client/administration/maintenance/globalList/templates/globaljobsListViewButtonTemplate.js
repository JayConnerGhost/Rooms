Template.globaljobsListViewButtonTemplate.events({
    'click #viewJob': function (e, t) {

        console.log(this._id);
        Session.set("selectedJobId", this._id);

        mbox.dialog({
            message:Template.viewMaintenanceJob,
            data: function(){
                return {
                    jobID:Session.get("selectedJobId")
                }
            }

        });
    },


});