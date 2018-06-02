function login()
{
	localStorage.setItem("usuario", $("#usuario").val());
    window.location.href = "dashboard.html";


	// email = $("#email").val();
	// password = $("#password").val();

	// $.ajax({
	//     type: "POST",
	//     dataType: "json",
	//     url: almacen+"users/login",
	//     data: {
	//         email: email,
	// 		password: password
	//     },
	//     beforeSend: function(data) {},
	//     success: function(data) {
	//     	alert("entra");
	//     },
	//     complete: function(data) {},
	//     error: function(data) {
	//     	alertify.notify(data.msg);
	//     }
	// }).done(function(data) {

	// });

}
