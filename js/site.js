$(document).ready(function(){

  var str = "<div id='num1' class='number col-xs-1 col-xs-offset-1'><h1>1</h1></div>",
      count = 2,
      str2 = "<div class='row'><paper-button class='mainBtn generateBtn col-xs-2 col-xs-offset-5'><h3>Generate</h3></paper-button></div>";

  for(var i=0 ; i<99 ; i++){
    str += "<div id='num" + count + "' class='number col-xs-1'><h1>" + count + "</h1></div>";
    count++;
  }

  str += str2;

  $('.container').html(str);

  $('.generateBtn').click(function(){
    var nums = [],
    newNum = parseInt(Math.random()*100);

    for(var i=0 ; i<99 ; i++){
      nums[i] = 0;
    }

    while(nums[newNum-1] === 1){
      newNum = parseInt(Math.random()*100);
    }

    nums[newNum-1] = 1;
    var select = "#num" + newNum;
    $(select).css("background-image","url('/images/used.svg')");

    str2 = "";
    $('#dialogContent').html("<h1>Lucky Number " + newNum + "</h1>");
    document.querySelector('#dialog').toggle();
    //alert("Lucky Number " + newNum);
    console.log(newNum);
  });
});
