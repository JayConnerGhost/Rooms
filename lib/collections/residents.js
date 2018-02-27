import SimpleSchema from 'simpl-schema';
Residents = new Mongo.Collection("residents");
Residents.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

ResidentsSchema=new SimpleSchema({
  "prefix":{
    type: String,
    label: "Title"
  },
  "preferred_name":{
    type: String,
    label: "Preferred Name",
    min:2,
    max: 250
  },
  "first_name":{
    type: String,
    label: "First Name",
    min:2,
    max: 200
  },
  "second_name":{
    type: String,
    label: "Surname",
    min:2,
    max: 200
  },
  "dob":{
    type: String,
    label: "Date of Birth",

},
  "email":{
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email Address"
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
"date_of_occupancy":{
    type: String,
    label: "Start of Occupancy",

},

  "notes": {
            type: String,
            label:"Notes",
            optional: true,
            max: 2000,
            },

"image_url":{
            type:String,
            label:"",
            optional: true,
            max:2000
},

"image_uuid":{
            type:String,
            label:"",
            optional: true,
            max:2000
}
});

Residents.attachSchema( ResidentsSchema );
