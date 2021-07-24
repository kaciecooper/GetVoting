// your script file for adding your own jquery
$(function() {



$(function() {
  $(".p2").typed({
    strings: ["DESIGNER", "DEVELOPER", "CREATIVE"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: false
  });
});

$('.hero-down').mousedown(function() {
  TweenMax.fromTo('.btn-react', 0.25, {
    opacity: 0,
    scale: 0
  }, {
    opacity: 0.25,
    scale: 1,
    onComplete: function() {
      TweenMax.to('.btn-react', 0.25, {
        opacity: 0,
        scale: 0
      });
    }
  });
});

// smooth scroll to div
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});



/*
function showNav(){
$('.globnav').html(

`
		<ul class="flex">
					<li><a href="index.html">Home</a></li>
					<li><a href=“css-grid.html class=”demo-1”>Grid Demo</a></li>
					<li><a href=“media-queries.html class=”demo-2”>Media Queries</a></li>
				</ul>
`
);

}

function addActiveClass () {
if($('body.hw-1')) {
	$('.demo-1').addClass('active')

	}else if($('body.hw-2') ){
		$('.demo-2').addClass('active');
	}
}


function initiatize() {
	showNav();
	addActiveClass();
}

$(initiatize()); 
*/





// End of Your Code . Don't delete that line below!!
});

