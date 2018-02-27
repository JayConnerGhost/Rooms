Template.councilResidentsTheHeathers.helpers({
    settings: function() {
        return {
            rowsPerPage: 30,
            showFilter: true,
            fields: [

                { key: 'NAME', label: 'Name' },
                { key: 'EMAIL', label: 'Email' },
                { key: 'TELEPHONE NUMBER ', label: 'Telephone' },
                { key: 'Enterance from house no', label: 'Entrance' },
                { key: 'NOTES ON ROOM', label: 'Notes On Room' },
                { key: 'ROOM SIZE', label: 'Room Size' },
                { key: 'ROOM No', label: 'Room Number' },
                { key: 'FLOOR', label: 'Floor' },
                { key: 'LOCATION ON FLOOR', label: 'Location On Floor' },
                {
                    key: 'MOVE IN DATE',
                    label: 'Move in Date',
                    fn: function(value, object, key) {
                        return moment(value).format('DD MM YYYY');
                    }
                }

            ],
        };
    },

});

Template.councilResidentsTheHeathers.tables = function() {
    console.log("function accessed");
    return councilResidentsH.find({});
};