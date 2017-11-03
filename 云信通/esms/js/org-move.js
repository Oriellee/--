window.onload = function() { 
	function $(id) { 
		return document.getElementById(id);
	} 
		var left = $("left"), right = $("loadList"), middle = $("middle"); 
		var middleWidth=2; 
		right.style.width = document.body.clientWidth -289 + "px"; 
		
		middle.onmousedown = function(e) { 
			var disX = (e || event).clientX; 
			middle.left = middle.offsetLeft; 
			document.onmousemove = function(e) { 
				var iT = middle.left + ((e || event).clientX - disX); 
				var e=e||window.event,tarnameb=e.target||e.srcElement; 
				maxT=400; 
				iT < 260 && (iT = 260); 
				iT > maxT && (iT = maxT); 
				middle.style.left = left.style.width = iT+ "px"; 
				document.getElementById("cont_left").style.width = iT+"px";
				left.style.width = iT-60+ "px";
				right.style.width = document.body.clientWidth - iT -middleWidth -10+ "px"; 
				right.style.left = iT+middleWidth+"px"; 
				return false 
			}; 
			document.onmouseup = function() { 
				document.onmousemove = null; 
				document.onmouseup = null; 
				middle.releaseCapture && middle.releaseCapture() 
			}; 
		middle.setCapture && middle.setCapture(); 
		return false 
	}; 
}; 