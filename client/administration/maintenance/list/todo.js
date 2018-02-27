
Template.todo.events({
    'click #viewjob':function(e){
        Session.set("selectedJobId",this._id);
        mbox.dialog({

       message:Template.viewMaintenanceJob,
        data: function(){
           return {
               jobID:Session.get("selectedJobId")
           }
        }

    });
    },


    'click #reassign':function(){
alert(this._id);
    },



    'click #completed':function(){
        Session.set("selectedJobId",this._id);
        mbox.dialog({

        message:Template.completeMaintenanceJob,
            data:function(){
                return {
                    jobID:Session.get("selectedJobId")
                }
            }
        })

    }
})

//add handlers for each button
//add mbox
//add templates
// status as a property of jobs

