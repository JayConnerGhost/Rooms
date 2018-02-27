/** This is the API underpinning resident operations within the rose iteration of daffodil **/
/** Author trinity knight : digitalBitch **/
/**1st August 20017**/
import {check} from 'meteor/check'

Meteor.methods({
    'registerResident': function ([prefix, preferred_name, first_name, second_name, dob, email, building_name, room_number, date_of_occupancy, notes, image_url, image_uuid]) {
        console.log("in method", prefix, preferred_name, first_name, second_name, dob, email, building_name, room_number, date_of_occupancy, notes)


        check(prefix, String);
        check(preferred_name, String);
        check(first_name, String);
        check(second_name, String);
        check(dob, String);
        check(email, String);
        check(building_name, String);
        check(room_number, String);
        check(date_of_occupancy, String);
        check(notes, String);
        check(image_url, String);
        check(image_uuid, String);

        data = {
            prefix: prefix,
            preferred_name: preferred_name,
            first_name: first_name,
            second_name: second_name,
            dob: dob,
            email: email,
            building_name: building_name,
            room_number: room_number,
            date_of_occupancy: date_of_occupancy,
            notes: notes,
            image_url: image_url,
            image_uuid: image_uuid
        }
        var result = Residents.insert(data);
        console.log(result)
    }
});