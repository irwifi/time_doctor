$( function () {
  // To clear the localStorage Cache
  // localStorage.clear();

  var signin_info = JSON.parse(localStorage.getItem("signin"));
  // Check if user has logged in
  if(signin_info === null || signin_info.signing_status !== true) {
    $("#login").show();
  } else {
    $("#logged_window").show();
  }

  $( "#login .btn_login" ).on( "click", login_click );

  $( "#login input" ).on( "change", function () { $( this ).css( "border-color", "#DDD" ); } );

  $( "#login input" ).on( "keydown", check_enter );

  $(".fa-sign-out").on("click", logout);

  $(".website").on('click', function() { chrome.tabs.create({url: "https://www.timedoctor.com/"}); });
});

function login_click() {
  if ( $( "#login .input_username" ).val().trim().toLowerCase() === "admin" && $( "#login .input_password" ).val() === "admin" ) {
    var signin_info = {"signing_status": true, "username": $( "#login .input_username" ).val()};
    // Save user logging in in cookie
    localStorage.setItem("signin", JSON.stringify(signin_info));

    $( "#login" ).hide();
    $("#logged_window").show();
  } else {
    if ( $( "#login .input_username" ).val().trim().toLowerCase() !== "admin" ) {
      $( "#login .input_username" ).css( "border-color", "#F00" ).addClass( "blinking_input" );
    }

    if ( $( "#login .input_password" ).val() !== "admin" ) {
      $( "#login .input_password" ).css( "border-color", "#F00" ).addClass( "blinking_input" );
    }

    // Remove the class blinking_input so that the blinking works next time also
    setTimeout( function () { $( ".blinking_input" ).removeClass( "blinking_input" ); }, 1600 );
  }
}

function check_enter( e ) {
  if ( e.keyCode === 13 ) {
    $( ".btn_login" ).focus();
    login_click();
  }
}

function logout() {
  localStorage.clear();
  $("#logged_window").hide();
  $( "#login" ).show();
}