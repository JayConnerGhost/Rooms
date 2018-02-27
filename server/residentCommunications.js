Meteor.publish('residentsCommunications', function () {
    /** const key = 'resident_Email_address';
     const value = emailAddress;

     const selector = {[key]: value}; **/

    return ResidentCommunications.find();
});

  
