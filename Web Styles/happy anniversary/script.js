function listener(e)
		{
				if(document.getElementById("caption").childNodes.length == 0)
				document.getElementById("caption").innerText = "Happy Republic Day";
//				document.getElementById("caption").style.color = "color:#9ACE15"


		}
		var e = document.getElementById("flag");
		e.addEventListener("webkitAnimationIteration",listener,false);