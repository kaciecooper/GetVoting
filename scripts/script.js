// your script file for adding your own jquery
$(function() {

//the body group moves on the y for -60 (up)
TweenMax.to(".project-section", 2.0, { 
	y:-20, 
	repeat:-1, 
	yoyo:true, 
	ease:Power1.easeInOut 		
});


function myFunction() {
	  var x = document.getElementById("myTopnav");
	  if (x.className === "topnav") {
	    x.className += " responsive";
	  } else {
	    x.className = "topnav";
	  }
	}
		







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

