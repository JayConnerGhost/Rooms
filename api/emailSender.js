/** This is the API underpinning resident operations within the rose iteration of daffodil **/
/** Author trinity knight : digitalBitch **/
/**1st August 20017**/
import {check} from 'meteor/check'

if (Meteor.isServer) {

    Meteor.methods({
        'sendEmail': function ([to, cc, body, subject, name, type]) {
            check(to, String);
            check(cc, String);
            check(body, String);
            check(subject, String);
            check(type, String);
            check(name, String);

            message = {
                to: to,
                cc: cc,
                text: body,
                subject: subject,
                type: type,
                name: name
            }

            Email.send(message);
            console.log('Email attempted to send')

            //TODO implement attachments based on type param. TK.
        }
    })


}
;