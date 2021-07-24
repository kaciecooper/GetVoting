// your script file for adding your own jquery
$(function() {

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
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

