import './helpers.js'

log.info("setting up routes  [#05routerjs]");
Router.configure({

    layoutTemplate: 'layout', //can be any template name
    loadingTemplate: 'loading',

    waitOn: function () {
        log.info("layout and loading configured [#03routerjs]");
        log.info("waiting for subscription residents [#04routerjs]");
        return [Meteor.subscribe('residents'),
            Meteor.subscribe('residentsCommunications'),
            Meteor.subscribe('councilResidents_bt'),
            Meteor.subscribe('councilResidents_h'),
            Meteor.subscribe('councilResidents_pt'),
            Meteor.subscribe('locations'),
            Meteor.subscribe('roomsList'),
            Meteor.subscribe('userList'),
            Meteor.subscribe('maintenancePriorities'),
            Meteor.subscribe('maintenanceRisks'),
            Meteor.subscribe('Maintenance')
        ];
    }
});

Router.onBeforeAction(function () {
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        this.redirect('login');
        this.stop();
    } else {
        this.next();
    }
}, {except: ['login']});

Accounts.onLogin(function () {
    Router.go('home');
});

Router.map(function () {
    //Admin-routes

    this.route('admin.resident.register', {
        path: '/admin/resident/add',
        function () {
            this.render('adminResidentRegister')
        },
        subscriptions: function () {
            this.subscribe("residentsCommunications");
        },
        name: 'admin.resident.register'
    });

    this.route('login', {
        path: '/system/login',
        function () {
            this.render('systemlogin')
        },
        name: 'login'
    });

    this.route('createUser', {
        path: '/system/createUser',
        function () {
            this.render('createUser')
        },
        name: 'createUser'
    });

    this.route('globalJobList',{
        path:'system/globaljobsList',
        function(){
            this.render('maintenanceGlobalJobList')
        },
        name:'globaljobsList'
    });

    this.route('managePermissions', {
        path: '/system/managePermissions',
        function () {
            this.render('managePermissions')
        },
        name: 'managePermissions'
    });

    this.route('admin.residents', {
        path: '/admin/residents',
        name: 'admin.residents',
        function () {
            this.render('adminResidents')
        },
        subscriptions: function () {
            this.subscribe('Residents');
        }
    });

    this.route('admin.view.resident', {
            path: '/admin/resident/view',
            function () {
                this.render('adminResidentView')
            },
            subscriptions: function () {
                this.subscribe("residents")
            }
        }
    );

    this.route('/admin/locations',
        function () {
            this.render('adminLocations')
        }, {
            name: 'admin.locations'
        });
    this.route('/admin/rooms',
        function () {
            this.render('adminRooms')
        }, {
            name: 'admin.rooms'
        });
    this.route('/admin/staff',
        function () {
            this.render('adminStaffList')
        }, {
            name: 'admin.staff'
        });
    this.route('/admin/maintenance.js',
        function () {
            this.render('adminMaintenance')
        }, {
            name: 'admin.maintenance'
        });
    //residents routes
    this.route('/residents/maintenance/list',
        function () {
            this.render('residentMaintenanceRequests');
        }, {
            name: 'resident.maintenance.requests'
        }
    );

    this.route('/residents/payments/list',
        function () {
            this.render('residentPayments');
        }, {
            name: 'resident.payment.records'
        }
    );
    this.route('/residents/correspondence/list',
        function () {
            this.render('residentCorrespondence');
        }, {
            name: 'residents.correspondence.records'
        }
    );
    this.route('/council/residents/list',
        function () {
            this.render('councilResidents');
        }, {
            name: 'council.residents.records'
        }
    );
    // By default, path = '/about', template = 'about'
    this.route('home', {
        path: '/' //overrides the default '/home'
    });
});
log.info("finished setting up admin routes  [#07routerjs]");