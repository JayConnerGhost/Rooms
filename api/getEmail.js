//GetEmailDocument

Meteor.methods({
//get email form email collection
    "GetEmailDocument": function (emailId) {

        var returnVal = communicationEmails.findOne({'_id': emailId});
        return returnVal;

    }


});