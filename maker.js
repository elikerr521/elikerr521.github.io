var makerUrl ="https://maker.ifttt.com/trigger/TIMMY TURNER/with/key/blzYrnXrjzdfmqqV7lYpTq";

function submitIt() {
	var message = $("#message").val();
	var img = $("#imgURL").val();

	var sendoff = {
	"value1" : message,
	"value2" : img,
	}

// the keys used are the defaults for

	$.post(makerUrl,sendoff);

//Clear input data

	$("#message").val("");
	$("#imgURL").val("");
}