(function ($, root, undefined) {
	
	$(function () {
		
		//
		$('#form-submit').click(function(event) {
			submitForm();
			return false; // Will stop the submission of the form
		});

			function submitForm(){
			// Initiate Variables With Form Content
			var name = $("#name").val();
			var email = $("#email").val();
			console.log('opening ajax request')
					$.ajax({
						type: "POST",
						url: "emailer.php",
						data: "name=" + name + "&email=" + email,
						success : function(text){
							if (text == "success"){
								formSuccess();
							} else {
								formError(text);
							}
						}
					});
			}
				function formSuccess(){
				    $("#contactForm")[0].reset();
				    submitMSG(true, "Message Submitted");
				}
				function formError(text){
				    submitMSG(false, text);				    
				}

				function submitMSG(valid, msg){
				    if(valid){
				        var msgClasses = "active";
				    } else {
				        var msgClasses = "error";
				    }
				    $("#send").removeClass().addClass(msgClasses).text(msg);
				}

			//
	});

})(jQuery, this);