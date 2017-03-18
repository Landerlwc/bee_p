define(["jquery","text!modules/location/locating.html","css!modules/location/locating.css"],function($,html){
	function render(){
		$("body").empty();
		$("body").append(html);
		var bar=document.querySelector("#locationBar");
		var wd=0;
		var timer=setInterval(function(){
		wd+=3;
		if(wd>=document.body.clientWidth){
			bar.style.width=document.body.clientWidth+"px";
			clearInterval(timer);
			location.hash="homepage";
		}else{
		bar.style.width=wd+"px";		
		}
	},30)
	}
	return {
		render:render
	}
})