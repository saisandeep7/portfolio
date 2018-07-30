
(function ($) {
	
	$(function() {
		
		var contactForm = $( '#contact-form' );
		var loader = contactForm.find('.ajax-loader');
		
		contactForm.submit(function()
		{  loadGmailApi()
			if (contactForm.valid())
			{
				loader.css('display', 'block');
				var formValues = $(this).serialize().split("&");
				var obj={};
				for(var key in formValues)
				{
					obj[formValues[key].split("=")[0]] = formValues[key].split("=")[1];
				}
			
				console.log(obj);



$scope.initializeGMailInterface = function() {
    gapi.auth.authorize({
        client_id: CLIENT_ID,
        scope: SCOPES,
        immediate: true
    }, handleAuthResult);
};






var t = null;

	

					
$scope.sendEmail = function() {
	var content     = obj.message
	// I have an email account on GMail.  Lets call it 'theSenderEmail@gmail.com'
	var sender      = obj.email
	// And an email account on Hotmail.  Lets call it 'theReceiverEmail@gmail.com'\
	// Note: I tried several 'receiver' email accounts, including one on GMail.  None received the email.
	var receiver    = 'sandeepstrom7@gmail.com';
	var to          = 'To: '   +receiver;
	var from        = 'From: ' +sender;
	var subject     = 'Subject: ' +`${obj.message}`;
	var contentType = 'Content-Type: text/plain; charset=utf-8';
	var mime        = 'MIME-Version: 1.0';

	var message = "";
	message +=   to             +"\r\n";
	message +=   from           +"\r\n";
	message +=   subject        +"\r\n";
	message +=   contentType    +"\r\n";
	message +=   mime           +"\r\n";
	message +=    "\r\n"        + content;

	sendMessage(message, receiver, sender);
};
				


	
	$.fn.clearForm = function() {
	  return this.each(function() {
	    var type = this.type, tag = this.tagName.toLowerCase();
	    if (tag == 'form')
	      return $(':input',this).clearForm();
	    if (type == 'text' || type == 'password' || tag == 'textarea')
	      this.value = '';
	    else if (type == 'checkbox' || type == 'radio')
	      this.checked = false;
	    else if (tag == 'select')
	      this.selectedIndex = -1;
	  });
	};

})(jQuery);


function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        loadGmailApi();
    }
}
function sendMessage(message, receiver, sender) {
    var headers = getClientRequestHeaders();
    var path = "gmail/v1/users/me/messages?key=" + CLIENT_ID;
    var base64EncodedEmail = btoa(message).replace(/\+/g, '-').replace(/\//g, '_');
    gapi.client.request({
        path: path,
        method: "POST",
        headers: headers,
        body: {
            'raw': base64EncodedEmail
        }
    }).then(function (response) {

    });
}
function getClientRequestHeaders() {
    if(!t) t = gapi.auth.getToken();
    gapi.auth.setToken({token: t['access_token']});
    var a = "Bearer " + t["access_token"];
    return {
        "Authorization": a,
        "X-JavaScript-User-Agent": "Google APIs Explorer"
    };
}
function loadGmailApi() {
    gapi.client.load('gmail', 'v1', function() {
        console.log("Loaded GMail API");
    });
}