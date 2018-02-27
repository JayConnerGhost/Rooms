//adminMaintenance
Template.adminMaintenance.events({
    'click #maintenanceSave': function () {
        event.preventDefault();

        var location = $("#locationSelect :selected").text();
        var room = $("#roomSelect :selected").text();
        var reportingStaff = $("#reportingStaff :selected").text();
        var priority = $("#prioritySelect :selected").text();
        var assignedStaff = $("#assignmentSelect :selected").text();
        var risk = $("#riskSelect :selected").text();

        var comments = $('[name=comments]').val();
        var description = $('[name=description]').val();

        var location_id=$('#locationSelect :selected').val();
        var room_id=$('#roomSelect :selected').val();
        var assignedStaff_id=$('#assignmentSelect :selected').val();
        var risk_id=$('#riskSelect :selected').val();
        var reportingStaff_id=$('#reportingSelect :selected').val();
        var priority_Id=$('#prioritySelect :selected').val();
        var status="Assigned";

        values = [location, room, reportingStaff, priority, assignedStaff, risk, comments, description, location_id,room_id,assignedStaff_id,risk_id,reportingStaff_id,priority_Id,status];


        Meteor.call('addMaintenanceItem', values, (err, result) => {

            if (err) {
                alert("error occured submitting form " + err + "leading to =>" + result + "<<");
            } else {
                console.log("added")
             }
            Router.go('globaljobsList');
        })


    }
});