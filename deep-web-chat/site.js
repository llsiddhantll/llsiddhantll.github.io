$(function(){

  var userId = "u" + parseInt(Math.random()*1000).toString(), //0 = Welcome Bot
      db = new Firebase('https://livebo7.firebaseio.com/'),
      userName = $('#setNameInput').val(),
      userMsg = $('#msgInput').val();

  var dbInitialize = function(){
    db.child('u0').set({ 'user' : "Welcome Bot" , 'msg' : "Hello! Type something in!" });
    db.child(userId).set({ 'user' : $('#setNameInput').val() , 'msg': $('#msgInput').val() });
  }

  //Database event handlers

  dbInitialize();

  db.once('value', function(snapshot){
    var userDB = snapshot.val(),
        msgDisplayTemplate = "<strong>{{user}}:</strong> {{msg}}<br>";
    $('.chatWindow').append(Mustache.render(msgDisplayTemplate, userDB.u0)); //Welcome message
  });

  db.on('value', function(snapshot){
    var userDB = snapshot.val(),
        msgDisplayTemplate = "<strong>{{user}}:</strong> {{msg}}<br>";

    console.log('New user logged in');
  });

  db.on('child_changed', function(childSnapshot){
    var userDB = childSnapshot.val(),
        msgDisplayTemplate = "<strong>{{user}}:</strong> {{msg}}<br>";
    $('.chatWindow').append(Mustache.render(msgDisplayTemplate, childSnapshot.val()));
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

});
