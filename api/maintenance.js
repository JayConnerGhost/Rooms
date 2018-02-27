import {check} from 'meteor/check'


Meteor.methods({
    updateJobStatus: function([jobId,status,comments]){
console.log(jobId, status,comments)
//Entries.update(winner._id, {$set: {winner: true, recent: true}});
Maintenance.update(jobId,{
    $set: {
        status:status,
        comments:comments

                }
            });

    }
});

Meteor.methods({
    'updateMaintenanceItem': function([maintenanceId,risk_id,risk_text, location_text, location_id, room_id, room_text, reportingStaff_id, reportingStaff_text, assignedStaff_id, assignedStaff_text, priority_id, priority_text, comments, description, status]){

        check(risk_id,String);
        check(risk_text,String);
        check(location_text,String);
        check(location_id,String);
        check(room_id,String);
        check(room_text,String);
        check(reportingStaff_id,String);
        check(reportingStaff_text,String);
        check(assignedStaff_id,String);
        check(assignedStaff_text,String);
        check(priority_id,String);
        check(priority_text,String);
        check(comments,String);
        check(description,String);
        check(status,String);

        data={
            risk_id: risk_id,
            risk: risk_text,
            location_id: location_id,
            location:location_text,
            room_id: room_id,
            room: room_text,
            reportingStaff_id: reportingStaff_id,
            reportingStaff: reportingStaff_text,
            assignedStaff_id: assignedStaff_id,
            assignedStaff: assignedStaff_text,
            priority_id: priority_id,
            priority: priority_text,
            comments: comments,
            description: description,
            status:status
        };
        console.log("@ server > "+ data.location);

    }
    

});

Meteor.methods({
'addMaintenanceItem': function([location, room, reportingStaff, priority, assignedTo, risk, comments, description, location_id,room_id,assignedStaff_id,risk_id,reportingStaff_id,priority_Id,status])
{
    console.log(location,room,reportingStaff,priority,assignedTo,risk,comments,description);

       check(location,String);
       check(room,String);
       check(reportingStaff,String);
       check(priority,String);
       check(assignedTo,String);
       check(risk,String);
       check(comments,String);
       check(description,String);
       check(status,String);



       data= {
        location: location,
        room :    room,
        reporting_staff:reportingStaff,
        assignedTo: assignedTo,
        priority: priority,
        risk: risk,
        comments: comments,
        description: description,
       location_id: location_id,
       room_id:  room_id,
       assignedStaff_id: assignedStaff_id,
       risk_id: risk_id,
       reportingStaff_id: reportingStaff_id,
       priority_Id: priority_Id,
       status:status,
       };

     var result=  Maintenance.insert(data);
     console.log(result);
   }


});