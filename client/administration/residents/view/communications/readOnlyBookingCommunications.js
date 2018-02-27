import datatables from 'datatables.net';
import datatables_bs from 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
fileIds=[];
Template.readOnlyBookingCommunications.helpers({
	//add you helpers here
});

Template.readOnlyBookingCommunications.events({
	//add your events here

	/** code for view all button
	for (var i=0, len=fileIds.length; i< len; i++){
		//colect email messages
	}
	**/
});

Template.readOnlyBookingCommunications.onCreated(function () {
	//add your statement here
	datatables(window, $);
	datatables_bs(window, $);
});

Template.readOnlyBookingCommunications.onRendered(function () {
	//add your statement here
	comsData= new Array();
	$('#comsTable').DataTable({
		data: comsData
	//TODO: turn search off 
	});
	residentDataTable=$('#comsTable').DataTable();





	console.log(comsData);
	console.log(residentDataTable);

	//migrated
	var residentEmailChange=function(){
		//work out functionality - regex to check its valid
		//  console.log('email is valid' + validateEmail(Session.get("residentEmail")))
		Session.set('residentEmailValid',validateEmail(Session.get("selectedResidentEmailAddress")));
		console.log(Session.get('residentEmailValid'));
		console.log( "-1- residentEmailChange");
	}

	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	function refreshCommunicationsData()
	{
		if(Session.get('residentEmailValid')){
			//{"resident_Email_address": Session.get('residentEmail')}
			mapComsCollectionToArray();
			console.log("-2- in refresh communications data , mapComsCollectionToArray has run, exiting function , comsData array =>"+ comsData)

			residentDataTable.clear();
			residentDataTable.rows.add(comsData);
			residentDataTable.draw();
			console.log("ops done")
		}
	}




	mapComsCollectionToArray=function(){
		console.log("-3- in mapComsCollectionToArray ")
		count=0;
	 fileIds.length=0;
		sourceComsData=ResidentCommunications.find({"resident_Email_address": Session.get('selectedResidentEmailAddress')}).forEach(
			function(currentComsDoc){

				recordId=currentComsDoc._id;
				preferredName=currentComsDoc.resident_preferred_name;
				residentFirstName=currentComsDoc.resident_first_name;
				residentLastName=currentComsDoc.resident_last_name;
				residentEmailAddress=currentComsDoc.resident_Email_address;
				buildingName=currentComsDoc.building_name;
				roomNumber=currentComsDoc.room_number;
				actionTaken=currentComsDoc.Action_taken;
				notificationType=currentComsDoc.Action_type;
				dateOfAction=currentComsDoc.action_performed_on_date;
			  fileId=currentComsDoc.document_record_Id;
				var arrayComsData=[
					recordId,
					preferredName,
					residentFirstName,
					residentLastName,
					residentEmailAddress,
					buildingName,
					roomNumber,
					actionTaken,
					notificationType,
					dateOfAction
				]

				fileIds.push(fileId);
				comsData[count]=arrayComsData;
				count++;

			}
		);



};





	Tracker.autorun(function() {
		var sessionVal=Session.get("selectedResidentEmailAddress");
		console.log("-0- autorunning email change detected");
		residentEmailChange();
		refreshCommunicationsData();
	});


});

Template.readOnlyBookingCommunications.onDestroyed(function () {
	//add your statement here
});
