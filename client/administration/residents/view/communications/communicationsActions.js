Template.communicationsActions.helpers({
	//add you helpers here
});

Template.communicationsActions.events({
	//add your events here

	//add handlers for clicks here
	'click #residentWarningAction': function(e) {
		//alert("warning action clicked");
		mbox.dialog({

			message: Template.residentWarningTemplate,
			data: function() {
				return {
					residentName:Session.get("selectedResidentDataSet").preferred_name,
					residentRoom:Session.get("selectedResidentDataSet").room_number,
					building:Session.get("selectedResidentDataSet").building_name,
					email:Session.get("selectedResidentDataSet").email,

				}


			}
		});
	},

	'click #residentSuspensionAction': function(e) {
		alert("suspension action clicked")
	},

	'click #residentCancellationAction': function(e) {
		alert("cancellation action clicked");
	},


	'click #residentSendMessageAction': function(e) {
		alert("send message action clicked");
	},


	'click #residentViewAll': function(e) {
		console.log("in function");
		emailDocuments=[];
		//TODO :get data list coms
		//1. get session data  residents Id
		count=0;
		//for loop to go through ids and then pullup record add record to record array
		//pass array to template write out all to template with niceties between them.
		for(i=0;i < fileIds.length;i++)
		{
			console.log("in loop");
			console.log("fileIds" + fileIds.length);
			console.log("index "+ i)
			console.log("in loop fileIds" + fileIds[i]);
			if(fileIds[i])
			{
			console.log("in loop fileIds" + fileIds[i]);	
				Meteor.call('GetEmailDocument',fileIds[i],function(err,res){
						if(err){
							toastr.error("Error loading email "+ fileIds[i], "Loading Emails");
					}
			 	else
			 	{
				emailDocuments.push(res);
			 		if(emailDocuments.length==(fileIds.length-count))
			 		{
						console.log("opening mbox");				
						mbox.dialog({ 
							message: Template.EmailCollectionDisplayTemplate,
							data: function() {
			 					return {
								 		 emails:emailDocuments
			 							}	

									}
			 			});
								
					}
			}	
			 })
			}
			 else
			 {
				count++;
			}
		}
  
	},
});	


Template.communicationsActions.onCreated(function () {


});

Template.communicationsActions.onRendered(function () {
	//add your statement here
});

Template.communicationsActions.onDestroyed(function () {
	//add your statement here
});
