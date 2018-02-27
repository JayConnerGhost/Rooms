import {ReactiveVar} from 'meteor/reactive-var'
import SimpleSchema from 'simple-schema';
import {Template} from 'meteor/templating'



Template.readOnlyBookingDetails.helpers({
    //add you helpers here


    Residents: function(){
	    residentRecord = Residents.findOne({'_id': Session.get('residentRecordId') });
        Session.set('selectedResidentDataSet', residentRecord);
        Session.set('selectedResidentEmailAddress', residentRecord['email']);
		console.log("current email => ",Session.get('selectedResidentEmailAddress'))
	    return residentRecord;
}});


Template.readOnlyBookingDetails.events({
    //add your events here
	//email_address


});

Template.readOnlyBookingDetails.onCreated(function () {

});

Template.readOnlyBookingDetails.onRendered(function () {

  originalPath= $('img').get(0).src;
  imgPathAppender='/nth/0/';
  $('img').first().attr('src',originalPath + imgPathAppender);
  console.log(originalPath + imgPathAppender);

    console.log("dataset" + residentRecord)

	$("iframe[name='galleryBrowser']").first().attr('src',Session.get('selectedResidentDataSet').image_url+"/gallery/-/nav/thumbs/-/fit/cover/-/loop/true/-/allowfullscreen/native/-/thumbwidth/100/");
	console.log(Session.get('selectedResidentDataSet').image_url+"/gallery/-/nav/thumbs/-/fit/cover/-/loop/true/-/allowfullscreen/native/-/thumbwidth/100/");

});

Template.readOnlyBookingDetails.onDestroyed(function () {
    //add your statement here
});

/***

 $("img[name='imageCurrent']").first().attr('src',this.cdnUrl.get()+"/nth/0/");
 $("img[name='imageCurrent']").first().attr('width, 40px');
 $("img[name='imageCurrent']").first().attr('height, 40px')
 $('#imageCurrent').show();
 **/