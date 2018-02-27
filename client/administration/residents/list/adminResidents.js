Template.adminResidents.helpers({
    settings: function() {
        return {
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: '_id', label: 'Record Id' },
                { key: 'prefix', label: 'Title' },
                { key: 'preferred_name', label: 'Preferred Name' },
                { key: 'first_name', label: 'First Name' },
                { key: 'second_name', label: 'Surname' },
                {
                    key: 'dob',
                    label: 'Date Of Birth'

                },
                { key: 'building_name', label: 'Building' },
                { key: 'room_number', label: 'Room' },
                {
                    key: 'date_of_occupancy',
                    label: 'Start of Occupancy'

                },
                {
                    key: 'view',
                    label: 'View',
                    tmpl: Template.residentViewButtonTemplate,
                },

            ],
        };
    },

});

Template.adminResidents.events({
    'click #viewResidentRecord': function(e, t) {
        console.log('clicked view button ');
        Session.set('residentRecordId', this._id);
        Session.set('view.resident.warning.behaviour.composeTrigger', false);
        Session.set('view.resident.warning.behaviour.values.amountOwing', '');
        Session.set('view.resident.warning.behaviour.values.deadlineDate', '');
        Session.set('view.resident.warning.behaviour.values.cancellationDate', '');
        console.log('id' + Session.get('residentRecordId'));
    },
});

Template.adminResidents.tables = function() {
    return Residents.find();
};