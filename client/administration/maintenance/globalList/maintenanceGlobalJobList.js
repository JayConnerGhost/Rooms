Template.globaljobsList.tables = function() {
    return Maintenance.find();
};


Template.globaljobsList.helpers({
    settings: function() {
        return {
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: '_id', label: 'Record Id' },
                { key: 'location', label: 'Location' },
                { key: 'room', label: 'Room' },
                { key: 'status', label: 'Status' },
                { key: 'reporting_staff', label: 'Reported By'},
                { key: 'assignedTo', label: 'Work Assigned to' },
                { key: 'priority', label: 'Job Priority' },
                { key: 'risk', label: 'Job Risk' },
                { key: 'description', label: 'Job Description' },
                { key: 'view',
                    label: 'View',
                    tmpl: Template.globaljobsListViewButtonTemplate,},
                { key: 'edit',
                    label: 'Edit',
                    tmpl: Template.globaljobsListEditButtonTemplate,}
            ],
        };
    },
});