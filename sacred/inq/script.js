function nagle(){
  $(".navajo").css({
    'display':'flex',
    'width':'6em',
    'text-align':'center',
    'animation-name':'poolcashb',
    'animation-duration':'2s',
    'animation-fill-mode':'forwards'
  });
  $('#nexus').css('display', 'none');
  $('#ping').css('display', 'none');
  $('#alphahack').css('display','none');
  $('.hammerlife').css('display', 'none');
  $('.hammerrake').css('display', 'none');
  $('#confide').css('display', 'none');
}

function nexus(){
  $('.navajo').css('display','none');
    $('#nexus').css('display','block');
  $('#ping').css('display', 'none');
  $('#alphahack').css('display', 'none');
  $('#confide').css('display', 'none');
}

function ping(){
  $('.navajo').css('display', 'none');
  $('#nexus').css('display', 'none');
  $('#ping').css('display', 'inline');
  $('#alphahack').css('display', 'none');
  $('#confide').css('display', 'none');
}

function alphahack(){
  $('.navajo').css('display', 'none');
  $('#nexus').css('display', 'none');
  $('#ping').css('display', 'none');
  $('#alphahack').css('display', 'inline');
  $('.hammerlife').css('display', 'block');
  $('.hammerrake').css('display', 'block');
  $('#confide').css('display', 'none');
}

function confide(){
  $('.navajo').css('display', 'none');
  $('#nexus').css('display', 'none');
  $('#ping').css('display', 'none');
  $('#alphahack').css('display', 'none');
  $('#confide').css('display', 'inline');
}

$('.perfunct').hover(
function(){
  $('#neurax').css('display', 'none');
  $('.linguistic-command').css('display', 'block');
},
function(){
  $('#neurax').css('display', 'inline');
  $('.linguistic-command').css('display', 'none');
}
);

var wpressure = $('.linguistic-command').css({
  'animation-name':'superweapm',
  'animation-duration':'2s',
  'animation-fill-mode':'forwards',
});

var audiophile = $("audio")[0];
$('#HTML5').hover(
function(){
  $('.linguistic-command').html('HTML 5');
  audiophile.play();
  $wpressure;
}
);
$('#CSS3').hover(
function(){
  $('.linguistic-command').html('CSS3');
  audiophile.play();
}
);
$('#JS').hover(
function(){
  $('.linguistic-command').html('Javascript');
  audiophile.play();
});

$('#XML').hover(
function(){
  $('.linguistic-command').html('XML');
  audiophile.play();
}
);

$('#AJAX').hover(
function(){
  $('.linguistic-command').html('AJAX');
  audiophile.play();
}
);

$('#JSON').hover(
function(){
  $('.linguistic-command').html('JavaScript Object Notation');
  audiophile.play();
}
);

$('#BS3').hover(
function(){
  $('.linguistic-command').html('Bootstrap v3 & v 4');
  audiophile.play();
}
);

$('#Ang').hover(
function(){
  $('.linguistic-command').html('Angular');
  audiophile.play();
});

$('#Git').hover(
function(){
  $('.linguistic-command').html('Git and Github');
  audiophile.play();
}
);

$('#Ruby').hover(
function(){
  $('.linguistic-command').html('Ruby');
  audiophile.play();
});

$('#RoR').hover(
function(){
  $('.linguistic-command').html('Ruby on Rails');
  audiophile.play();
}
);

$('#HAML').hover(
function(){
  $('.linguistic-command').html('HAML');
  audiophile.play();
});

$('#RSPEC').hover(
function(){
  $('.linguistic-command').html('RSPEC');
  audiophile.play();
});

$('#Python').hover(
function(){
  $('.linguistic-command').html('Python');
  audiophile.play();
}
);

$('#CSharp').hover(
function(){
  $('linguistic-command').html('#C');
  audiophile.play();
});

$('#Cplusplus').hover(
function(){
  $('.linguistic-command').html('C++');
  audiophile.play()
});