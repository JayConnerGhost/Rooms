if (Locations.find().count() === 0) {
    console.log("in locations fixtures")
    Fixtures.insert(Locations, 'The_Heathers', {
        name: 'The Heathers',
        key: 'bn12pg-45',
        rooms: 31,
        postcode: 'BN2 1PG'
    });

    Fixtures.insert(Locations, 'Percival_Terrace', {
        name: '3-5 Percival Terrace',
        key: 'bn21fa-35',
        rooms: 62,
        postcode: 'BN2 1FA'
    });

    Fixtures.insert(Locations, 'The_Bay_Tree', {
        name: 'The Bay Tree',
        key: 'bn21pg-1315',
        rooms: 37,
        postcode: 'BN2 1PG'
    });
}