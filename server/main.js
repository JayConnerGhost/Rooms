import {Meteor} from 'meteor/meteor';
import {Logger} from 'meteor/ostrio:logger';
import {LoggerMongo} from 'meteor/ostrio:loggermongo';

const log = new Logger();
// Initialize LoggerMongo with collection instance:
const LogMongo = new LoggerMongo(log, {
    collection: appdata
});
// Enable LoggerMongo with default settings:
LogMongo.enable();

log.info("set up logging [#01mainjs]")


Meteor.startup(() => {
    if (Meteor.isClient) {


    }

    if (Meteor.isServer) {
        console.log("in main meteor.startup");
        // code to run on server at startup
        // process.env.MAIL_URL = 'smtp://ghosttk01:Wh1skers01$@smtp.sendgrid.net:587';
        //process.env.MAIL_URL = 'smtp://shedarknezz@gmail.com:Wh1skers@smtp.gmail.com:587';
        process.env.MAIL_URL = 'smtp://postmaster%40sandboxf1f9f1117d7b452baeb95e9c68cdda83.mailgun.org:b909c70ba74cbf816213cb2a4f751fd1@smtp.mailgun.org:2525';

        //Email.send({
        // from: " postmaster@sandboxf1f9f1117d7b452baeb95e9c68cdda83.mailgun.org",
        // to: "ghosttk@protonmail.com",
        // subject: "testing system ",
        // text: "Here is some text"
        // });

        //Roles.addUsersToRoles(joesUserId, 'super-admin', Roles.GLOBAL_GROUP)


    }
    //console.log('email sent')
});