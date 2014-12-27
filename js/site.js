$(document).ready(function(){

  var tabs = document.querySelector('paper-tabs'),
      pages = document.querySelector('core-pages'),
      repositionCircle = function(){
        var leftPos = $(window).width()/2 - 150;
        $('.selectedNumber').css("left",leftPos+"px");
      },
      repositionGenerate = function(){
        var leftPos = $(window).width()/2 - 75;
        $('#generateBtn').css("left",leftPos+"px");
      },
      str="";

  tabs.addEventListener('core-select',function(){
    pages.selected = tabs.selected;
  });

  $('#generateBtn').click(function(){
    var newNum = parseInt(Math.random()*100),
        numArray = [];

    for(var i=0 ; i<99 ; i++)
    {
      numArray[i] = 0;
    }

    while(numArray[newNum] === 1)
    {
      newNum = parseInt(Math.random()*100);
    }
    numArray[newNum] = 1;

    $('.selectedNumber').html("<p>"+ newNum +"</p>");
    $('.currentNumber').html("<h3>Current:</h3><br>" + newNum);
    $('#num'+newNum).css('background-image',"url('/images/used.svg')");
  });

  $(window).resize(function(){
    repositionCircle();
    repositionGenerate();
  });

  repositionCircle();
  repositionGenerate();

  //GENERATE NUMBER DIVS INSIDE CONTAINER

  for(var i=1 ; i<=10 ; i++)
  {
    str+="<div class='row'><div id='num" + ((i-1)*10+1) + "' class='numbers col-xs-1 col-xs-offset-2'><p>" + ((i-1)*10+1) + "</p></div>";
    for(var j=2 ; j<=10 ; j++)
    {
      str+="<div id='num" + ((i-1)*10+j) + "' class='numbers col-xs-1'><p>" + ((i-1)*10+j) + "</p></div>";
    }
    str+="</div>";
  }

  $('.container').html(str);

});
