$(function(){

  var logindb = new Firebase('https://logindetails.firebaseio.com/');

  $('#showLogInButton').on('click', function(){
    $('.mainControls')
      .css('transform','translate(0,-100px)')
      .css('animation','fadeOut 1s')
      .css('opacity','0');

    $('.logInControls')
      .css('transform','translate(0,-100px)')
      .css('animation','fadeIn 1s')
      .css('opacity',100);
  });

  $('#logInButton').on('click', function(){
    //Validate username and password
    var username = $('#usernameInput').val();
    console.log('Welcome ' + logindb.child(username).key());

    $.ajax({
      type: 'GET',
      url: '/chat-app.html',
      success: function(data){
        $('body').html(data);
      }
    });
  });

  $('#usernameInput').on('keypress', function(event){
    if(event.keyCode == 9)
      $('#passwordInput').focus();
  });

  $('#passwordInput').on('keypress', function(event){
    if(event.keyCode == 13)
      $('#logInButton').click();
    });
});
