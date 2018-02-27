import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
//PdfFiles_resident_warnings=new Mongo.Collection("PdfFiles_resident_warnings");


Template.serviceChargeWarningTemplate.events({
	// add your events here
	'click #composeDetails': function(e) {
		e.preventDefault();
		Session.set('view.resident.warning.behaviour.composeTrigger', true);
		Session.set('view.resident.warning.behaviour.values.amountOwing', $('#amountOwing').val());
		Session.set('view.resident.warning.behaviour.values.deadlineDate', $('#deadlineDate').val());
		Session.set('view.resident.warning.behaviour.values.cancellationDate', $('#cancellationDate').val());
		Session.set('view.resident.values.preferredName',Session.get('selectedResidentDataSet').preferred_name);
		Session.set('view.resident.values.buildingName',Session.get('selectedResidentDataSet').building_name);
		Session.set('view.resident.values.roomNumber',Session.get('selectedResidentDataSet').room_number);
		Session.set('view.resident.values.email',Session.get('selectedResidentDataSet').email);
		Session.set('view.resident.record.id',Session.get('selectedResidentDataSet')._id);
		
		
		e.preventDefault();
		//TODO: save and send functionality
		//compose
		//variable values
		amountOwingPM=Session.get('view.resident.warning.behaviour.values.amountOwing');
		deadLineDatePM=Session.get('view.resident.warning.behaviour.values.deadlineDate');
		cancellationDatePM=Session.get('view.resident.warning.behaviour.values.cancellationDate');
		preferedNamePM=Session.get('view.resident.values.preferredName');
		buildingNamePM=Session.get('view.resident.values.buildingName');
		roomNumberPM=Session.get('view.resident.values.roomNumber');
		userIdDB=Session.get('view.resident.record.id') ;
		
		message=[
			"Warning regarding your accomodation\n",
			"at\n",
			"[-BN-], room [-RN-]\n",
			"\n",
			"Dear [-PN-]\n\n",
			"Your service charge account is £[-SCA-] in arrears.\n",
			"To prevent your room being cancelled on [-CDA-], you must bring your account up to date by [-DDA-].\n",
			"If you are having difficulty making payment, or your benefits have been stopped, please contact the office on 01273 673776 Monday to Friday 9am – 5pm.\n",
			"Please remember your room is at risk if you do not keep up to date with your service charge payments.\n\n",
			"Angelique Glata\n",
			"Director\n",
			"Lincar Trading Ltd\n",
			"Associate Director Halgar Trading Limited\n",
			"Tel: 01273 673776\n"
		];
		
		//Preparation
		msgPreParse=message.join('');
		msgParseStage1=msgPreParse.replace('[-SCA-]',amountOwingPM );
		msgParseStage2=msgParseStage1.replace('[-DDA-]',deadLineDatePM);
		msgParseStage3=msgParseStage2.replace('[-CDA-]',cancellationDatePM);
		msgParseStage4=msgParseStage3.replace('[-PN-]',preferedNamePM);
		msgParseStage5=msgParseStage4.replace('[-RN-]',roomNumberPM);
		msgParseStage6=msgParseStage5.replace('[-BN-]',buildingNamePM);
		
		$('#emailMessageWIP').text(msgParseStage6);
		
		
	},
	
	'click #btnServiceChargeWarningSaveAndSend': function(e){
		e.preventDefault();
	 finalMessage=$('#emailMessageWIP').val();
		  alert(finalMessage);
		residentRecordId=Session.get('residentRecordId');
		residentEmailAddress=Session.get('view.resident.values.email');
		
	
		//TODO:// set up sender details
		msgValues=[finalMessage,"Warning Service Charges Overdue", residentRecordId,residentEmailAddress];
		
		 Meteor.call('SaveEmailDocument' ,msgValues,function (err, res){
		 	if(err){
		 	    //todo functionality
			    console.log("error occured with record " +  residentRecordId +" while generating pdf or sending a email"+ err)
			    toastr.error("operation failed" , email);
		    }
		    else{
					
				}
				Session.set("view.resident.warning.email.id",res);
		});
		         //alterlist to use var names form residents not communications
				
		var sourceRecord=Session.get('selectedResidentDataSet');
		var recordID=sourceRecord._id;
		var preferredName=sourceRecord.preferred_name;
		var firstName=sourceRecord.first_name;
		var lastName=sourceRecord.second_name;
		var emailAddress=sourceRecord.email;
		var buildingName=sourceRecord.building_name;
		var roomNumber=sourceRecord.room_number;
		var actionTaken='Warning';
		var notificationType='Email';
		var today = new Date();
		var dateOfAction=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var fileId=Session.get('view.resident.warning.email.id');
		
	var candidateValues=[
		recordID,
		preferredName,
		firstName,
		lastName,
		emailAddress,
		buildingName,
		roomNumber,
		actionTaken,
		notificationType,
		dateOfAction,
		fileId
	];
	
	  //todo call server side method for insert
		Meteor.call('SaveResidentCommunicationRecord',candidateValues, function(err, res){
			if(err){
				 Console.log("error occured with record"+ preferredName + " " + recordID +"while sending email, saving coms record");
				 Meteor.Error("unsuccesfull");
			}
			else
			{
				alert("Rrcords updated succesfully")
			}
			                       			  			
		})
	
	  //TODO send email
		

	  msgEmailValues=[finalMessage,"Warning Service Charges Overdue", residentEmailAddress];
	 
	  Meteor.call('SendEmail',msgEmailValues, function(err, res){
		if(err){
			 Console.log("error occured with record"+ preferredName + " " + recordID +"while sending email, sending email");
			 Meteor.Error("unsuccesfull");
		}
		else
		{
			alert("Records updated succesfully")
		}
														 
	})


	}
});

Tracker.autorun((computation) => {
	if (!Session.equals('view.resident.warning.behaviour.composeTrigger', true)) {
		return;
	}
	$('#fsParams').attr('class','hidden')
	$('#fsCompose').attr('class','shown');
	
	Session.set('view.resident.warning.behaviour.composeTrigger', false);
});


Template.serviceChargeWarningTemplate.onCreated(function() {
	// add your statement here
	$('#fsParams').attr('class','shown')
});

Template.serviceChargeWarningTemplate.onRendered(function() {
	// add your statement here
	this.$('#cancellationDate').datetimepicker({
		format: 'd.m.Y',
		inline: false,
		lang: 'en',
	});
	
	
	this.$('#deadlineDate').datetimepicker({
		format: 'd.m.Y',
		inline: false,
		lang: 'en',
	});
});

Template.serviceChargeWarningTemplate.onDestroyed(function() {
	// add your statement here
});
