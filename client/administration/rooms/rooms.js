Template.locations.helpers({
    location: function() {
        return Locations.find({});
    },
    locationSelected: function() {
        if (Session.get('locationSelected') === this.key) {
            return "selected"
        }
    },

    settings: function() {
        return {
            rowsPerPage: 30,
            showFilter: true,
            fields: [

                { key: 'ROOM No', label: 'Room Number' },
                { key: 'FLOOR', label: 'Floor' },
                { key: 'LOCATION ON FLOOR', label: 'Location on Floor' },
                { key: 'ROOM SIZE', label: 'Room Size' },
                { key: 'NOTES ON ROOM', label: 'Notes On Room' },

            ],
        };
    }

});

Template.locations.tables = function() {

    return RoomsList.find({ key: Session.get('locationSelected') });
};

Template.locations.onRendered(function() {

    //TODO: code to go in here to auto load settings with the first value in the drop down -- weak place holder code in there for now 
    Session.set('locationSelected', 'bn12pg-45');
});

Template.locations.events({

    'change  #locationsSelect': function(event, template) {
        event.preventDefault();
        var selected_value = $(event.target).val();
        Session.set('locationSelected', selected_value);

    }
});