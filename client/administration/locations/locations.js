Template.adminLocations.helpers({
    settings: function() {
        return {
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: '_id', label: 'Record Id' },
                { key: 'name', label: 'Location' },
                { key: 'rooms', label: 'Number of Rooms' },
            ],
        };
    },
});

Template.adminLocations.events({});

Template.adminLocations.tables = function() {
    return Locations.find();
};