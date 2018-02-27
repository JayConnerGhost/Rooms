import SimpleSchema from 'simpl-schema';

ResidentCommunications=new Mongo.Collection("residentCommunications");
ResidentCommunications.deny({
insert() { return true; },
update() { return true; },
remove() { return true; }
})

ResidentCommunicationsSchema=new SimpleSchema({
   "resident_preferred_name":{
       type: String,
       label: "Resident",
       min:2,
       max: 250
   },

   "resident_first_name":{
    type: String,
    label: "First Name",
    min:2,
    max: 250
    },

   "resident_last_name":{
    type: String,
    label: "Last Name",
    min:2,
    max: 250
   },

   "resident_Email_address":{
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email Address"
   },

   "action_performed_on_date":{
    type: String,
    label: "Date of dispatch",

},

    "building_name":{
    type: String,
    label: "Building",
    allowedValues: ['Percival Terrace','The Heathers', 'The Baytree', 'Other']

    },

    "room_number":{
    type: Number,
    label: "Room Number"
    },

   "Action_taken":{
    type:String,
    label: "Action",
    allowedValues: ['Sanction', 'Canceled', 'Fees Reminder', 'Warning', 'Handbook Issued', 'Council Canceled']
    },

    "Action_type":{
        type:String,
        label: "Dispatch Method",
        allowedValues:['SMS', 'Post', 'Conversation','Email', 'Hand Delivered']
    },

   "notes": {
    type: String,
    label:"Notes",
    optional: true,
    max: 2000,
    },

   "document_record_Id":{
    type:String,
    label:"",
    optional: true,
    max:2000
},


})

ResidentCommunications.attachSchema( ResidentCommunicationsSchema );