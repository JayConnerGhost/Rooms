import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

communicationEmails = new Mongo.Collection("CommunicationEmails");

//		msgValues=[finalMessage,"Warning Service Charges Overdue", residentRecordId,residentEmailAddress];

Meteor.methods({
    "SaveEmailDocument": function ([message, subject, residentRecordId, residentEmailAddress]) {

        //save text record
        //send email
        var returnVal = communicationEmails.insert({
            message: message,
            subject: subject,
            resident: residentRecordId,
            residentEmailAddress: ResidentEmailAddress
        });

        return returnVal;
    },
});

Meteor.methods({
    "SaveResidentCommunicationRecord": function ([recordId, preferredName, residentFirstName, residentLastName, residentEmailAddress, buildingName, roomNumber, actionTaken, notificationType, dateOfAction, fileId]) {


        var returnVal = ResidentCommunications.insert({
            resident_preferred_name: preferredName,
            resident_first_name: residentFirstName,
            resident_last_name: residentLastName,
            resident_Email_address: residentEmailAddress,
            building_name: buildingName,
            room_number: roomNumber,
            Action_taken: actionTaken,
            Action_type: notificationType,
            action_performed_on_date: dateOfAction,
            document_record_Id: fileId
        });

        return returnVal;

    }
})

Meteor.methods({
    "SendEmail": function ([message, subject, residentEmailAddress]) {
        Email.send({
            from: "postmaster@sandboxf1f9f1117d7b452baeb95e9c68cdda83.mailgun.org",
            to: residentEmailAddress,
            subject: subject,
            text: message
        });
    }
})

