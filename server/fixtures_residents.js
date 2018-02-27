//      residents fixture
// var Residents = new Mongo.Collection('residents');
if (Residents.find().count() === 0) {
    Fixtures.insert(Residents, 'trinity_knight', {
        prefix: 'Ms',
        preferred_name: 'darkGhost',
        first_name: 'Trinity',
        second_name: 'Knight',
        dob: new Date('09/06/1974'),
        email: 'shedarknezz@gmail.com',
        building_name: 'The Heathers',
        room_number: '22',
        date_of_occupancy: new Date('04/03/2016'),
        image_url: '',
        image_uuid: ''
    });

    Fixtures.insert(Residents, 'sarah_james', {
        prefix: 'Ms',
        preferred_name: 'Sarah',
        first_name: 'Sarah',
        second_name: 'James',
        dob: new Date('09/04/1974'),
        email: 'ghosttk@protonmail.com',
        building_name: 'The Heathers',
        room_number: '22',
        date_of_occupancy: new Date('04/02/2016'),
        image_url: '',
        image_uuid: '',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus leo, vitae auctor dolor finibus'
    });


}
if (Locations.find().count === 0) {
    Fixtures.insert(Locations, 'The_Heathers', {
        name: 'The Heathers',
        rooms: '',
        postcode: ''
    });

    Fixtures.insert(Locations, 'Percival_Terrace', {
        name: '3-5 Percival Terrace',
        rooms: '',
        postcode: ''
    });

    Fixtures.insert(Locations, 'The_Bay_Tree', {
        name: 'The Bay Tree',
        rooms: '',
        postcode: ''
    });
}
