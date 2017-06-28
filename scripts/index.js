$( function () {
  $( "#login .btn_login" ).on( "click", login_click );

  $( "#login input" ).on( "change", function () { $( this ).css( "border-color", "#DDD" ); } );

  $( "#login input" ).on( "keydown", check_enter );
} );

function login_click() {
  if ( $( "#login .input_username" ).val() === "admin" && $( "#login .input_password" ).val() === "admin" ) {
    $( "#login" ).hide();
  } else {
    if ( $( "#login .input_username" ).val() !== "admin" ) {
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