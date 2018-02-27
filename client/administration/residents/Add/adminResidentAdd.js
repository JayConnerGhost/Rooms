import { ReactiveVar } from 'meteor/reactive-var'
import SimpleSchema from 'simple-schema';
import { Template } from 'meteor/templating'
import uploadcare from 'meteor/uploadcare:uploadcare-widget'

if (Meteor.isClient) {
    Template.adminResidentRegister.onCreated(function() {
        this.uuid = new ReactiveVar('')
        this.cdnUrl = new ReactiveVar('')

        $('#imageCurrent').hide();

    });
    // Template.adminResidentRegister.events({
    //   'input #email': function (event, template) {
    //       Session.set("residentEmail", event.currentTarget.value);
    //         );
    //   }
    // });
    Template.adminResidentRegister.helpers({
        uuid() {
            return Template.instance().uuid.get()
        },
        cdnUrl() {
            return Template.instance().cdnUrl.get()
        }
    });

    $.validator.addMethod("enGbDate", function(value, element) {

        var result = moment(value, 'DD MM YYYY').isValid();

        console.log("in function " + result)

        if (result) {
            console.log("result was true " + value)
            return true;
        }
        console.log("result was false " + value)
        return false;

    }, "invalid date , check format");

    $.validator.setDefaults({
        // custom rules go here
        rules: {

            preferred_name: {
                required: true,
                minlength: 2
            },
            first_name: {
                required: true,
                minlength: 3
            },
            second_name: {
                required: true,
                minlength: 3
            },
            dob: {
                required: true,
                //enGbDate: true
            },
            email: {
                required: true,
                email: true
            },
            room_number: {
                required: true,
                number: true
            },
            date_of_occupancy: {

                required: true,
                //enGbDate: true
            },
        },
    })
}

Template.adminResidentRegister.events({
    'submit form': function(event) {

        event.preventDefault();
        console.log("form submitted");
        var digitalContent = $('input:hidden[name=resident]').val();
        console.log("show " + digitalContent);
        var prefix = $('[name=prefix]').val();
        var preferred_name = $('[name=preferred_name]').val();
        var first_name = $('[name=first_name]').val();
        var second_name = $('[name=second_name]').val();
        //var dob = moment($('[name=dob]').val()).format('DD MM YYYY');
        var dob = $('[name=dob]').val();
        var email = $('[name=email]').val();
        var building_name = $('[name=building_name]').val();
        var room_number = $('[name=room_number]').val();
        //var date_of_occupancy = moment($('[name=date_of_occupancy]').val()).format('DD MM YYYY');

        var date_of_occupancy = $('[name=date_of_occupancy]').val();


        var notes = $('[name=notes]').val();
        var image_url = $('input:hidden[name=image-group-url]').val();
        var image_uuid = $('input:hidden[name=image-group-uuid]').val();

        values = [prefix, preferred_name, first_name, second_name, dob, email, building_name, room_number, date_of_occupancy, notes, image_url, image_uuid]

        console.log("values to send" + values);
        Meteor.call('registerResident', values, (err, result) => {
            if (err) {
                alert("error occured submitting form " + err + "leading to =>" + result + "<<");
            } else {
                console.log("added")
                Router.go('/admin/residents');
            }

        })
    }
});

Template.adminResidentRegister.onRendered(function() {
    //date pickers causing issues removed for now 
    /** this.$('#dob').datetimepicker({
        format: 'd m Y',
        inline: false,
        lang: 'en'

    });
    this.$('#date_of_occupancy').datetimepicker({
        format: 'd m Y',
        inline: false,
        lang: 'en'

});**/

    this.$('.registration').validate();

    let widget = uploadcare.Widget('input:hidden[name=resident]')
    widget.onUploadComplete((info) => {
        this.uuid.set(info.uuid)
        this.cdnUrl.set(info.cdnUrl)



        $('input:hidden[name=image-group-url]').val(this.cdnUrl.get());
        $('input:hidden[name=image-group-uuid]').val(this.uuid.get());

        $("img[name='imageCurrent']").first().attr('src', this.cdnUrl.get() + "/nth/0/");
        $("img[name='imageCurrent']").first().attr('width, 40px');
        $("img[name='imageCurrent']").first().attr('height, 40px')
        $('#imageCurrent').show();

        $("iframe[name='galleryBrowser']").first().attr('src', this.cdnUrl.get() + "/gallery/-/nav/thumbs/-/fit/scaledown/-/loop/true/-/allowfullscreen/native/-/thumbwidth/100/")
    })


});