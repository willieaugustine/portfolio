//Only works in Chrome. Best viewed full screen: http://codepen.io/trhino/full/qcvBd

leftPos = $(window).width() + 200;

function setLeft(){
  leftPos = $(window).width() + 200;
  $('nav li').css('left', -leftPos); 
};
setLeft();

//Nav in
$('.fa-reorder').on('click', function(){
  var timer = 0
  
  $('nav li').each(function(){
    timer = timer + 75;
    var $this = $(this);
    setTimeout(function(){
      $this.animate({ left : 0 }, 200);
    }, timer);    
    });
    
    $('.fa-reorder').fadeOut(100);
  });

//Nav out
$('nav li a').on('click', function(){
    var timer = 0;
    $('nav li').each(function(){
    timer = timer + 74;
    var $this = $(this);
    setTimeout(function(){
      $this.animate({ left : -leftPos }, 200, function(){
        $('.fa-reorder').fadeIn(500);
      });
    }, timer); 
  });
  
}); 

//Set the nav font size based on vertical window height
function browserHeight(){
  var navHeight = $('nav li').height();
  $('nav li a').css({
    'font-size' : navHeight / 2.3
  });
};
browserHeight();

$(window).on('resize', browserHeight);

