Template.residentWarningTemplate.helpers({
	//add you helpers here
});

Template.residentWarningTemplate.events({
	//add your events here
	"click #residentSendWarning" : function(e)
	{
		SendEmail();
	},

	"click #residentCancelWarning" : function(e)
	{
		alert('cancel pressed');
	}
});

Template.residentWarningTemplate.onCreated(function () {
	//add your statement here
});

Template.residentWarningTemplate.onRendered(function () {
	//add your statement here
});

Template.residentWarningTemplate.onDestroyed(function () {
	//add your statement here
});

function SendEmail(){
var textEntered=$('[name=messageBody]').val();
// console.log(textEntered);
// alert(textEntered);

	var to = Session.get("selectedResidentEmailAddress");
	var cc ="aeglata@gmail.com";
	var body=textEntered;
	var subject="Warning email : ref your accommodation";
	var type='Warning';
	emailMessage=[to,cc,body,subject,name,type]


	Meteor.call('sendEmail',emailMessage,(err, result)=>{
		if(err){
			alert('error occured sending email => ' +err + "Leading to =>"+result );
		}
		else {
			console.log("email sent");
			Router.go('/admin/residents');
		}
	})



	alert("email Sent")


}