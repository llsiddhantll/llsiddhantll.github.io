$(function(){

  //LOGIN JS

  var logindb = new Firebase('https://logindetails.firebaseio.com/'),
      username = $('#usernameInput').val(),
      valid = 0;

  $('#showLogInButton').on('click', function(){
    $('.mainControls')
    .css('transform','translate(0,-100px)')
    .css('animation','fadeOut 1s')
    .css('opacity','0');

    $('.logInControls')
    .css('transform','translate(0,-100px)')
    .css('animation','fadeIn 1s')
    .css('opacity',100);

    $('#usernameInput').focus();
  });

  $('#logInButton').on('click', function(){
    //Validate username and password
    username = $('#usernameInput').val();
    password = $('#passwordInput').val();

    var jsonString = logindb.child(username) + "/.json";

    $.getJSON(jsonString, function(data){
      if(data == null)
        $('.error')
        .css('animation','fadeIn 1s')
        .css('opacity','100');

      else if(password != data.password)
        $('.error')
          .css('animation','fadeIn 1s')
          .css('opacity','100');

      else if(password == data.password)
      {
        $.ajax({
          type: 'GET',
          url: 'chat-app.html',
          success: function(data){
            $('body').html(data);
            //MAIN CHAT JS

            var userIdString = logindb.child(username) + "/.json";
            userId = "",
            db = new Firebase('https://livebo7.firebaseio.com/'),
            userMsg = $('#msgInput').val();

            $.getJSON(userIdString, function(data){
              userId = data.Id;
              username = logindb.child(username).key();
              $('#setNameInput').val("" + username);
              dbInitialize();
            });

            var dbInitialize = function(){
              db.child('u0').set({ 'user' : "Welcome Bot" , 'msg' : "Hello! Type something in!" });
              db.child(userId).set({ 'user' : $('#setNameInput').val() , 'msg': $('#msgInput').val() });
            }

            //Database event handlers

            db.once('value', function(snapshot){
              var userDB = snapshot.val(),
              msgDisplayTemplate = "<strong>{{user}}:</strong> {{msg}}<br>";
              $('.chatWindow').append(Mustache.render(msgDisplayTemplate, userDB.u0)); //Welcome message
            });

            db.on('child_changed', function(childSnapshot){
              var userDB = childSnapshot.val(),
              msgDisplayTemplate = "<strong>{{user}}:</strong> {{msg}}<br>";
              $('.chatWindow').append(Mustache.render(msgDisplayTemplate, childSnapshot.val()));
            });

            db.on('child_added', function(childSnapshot){
              $('.chatWindow').append(childSnapshot.val().user + "<i> has joined.</i><br>");
            });

            db.on('child_removed', function(oldChildSnapshot){
              $('.chatWindow').append(oldChildSnapshot.val().user + "<i> has left.</i><br>");
            });

            //Form element event handlers

            $('#sendButton').on('click', function(){
              db.child(userId).set({ 'user' : $('#setNameInput').val() , 'msg': $('#msgInput').val() });
              $('#msgInput').val("");
            });

            $('#setNameInput').on('keypress', function(event){
              if(event.keyCode == 9)
                $('#msgInput').focus();
              });

            $('#msgInput').on('keypress', function(event){
              if(event.keyCode == 13)
                $('#sendButton').click();
              });
          }
        });
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
