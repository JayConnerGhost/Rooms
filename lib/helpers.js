import {Logger} from 'meteor/ostrio:logger';
import {LoggerMongo} from 'meteor/ostrio:loggermongo';
import {Meteor} from 'meteor/meteor';

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

log = new Logger();
// Initialize LoggerMongo with collection instance:
LogMongo = new LoggerMongo(log, {
    collection: appdata
});
// Enable LoggerMongo with default settings:
LogMongo.enable();

if (Meteor.isClient) {
    Template.navItems.helpers({
        activeIfTemplateIs: function (template) {
            var currentRoute = Router.current();
            return currentRoute &&
            template === currentRoute.lookupTemplate() ? 'active' : '';
        }
    });

    Template.registerHelper('formatDate', function (date) {
        return moment(date).format('DD-MM-YYYY');
    });


}


