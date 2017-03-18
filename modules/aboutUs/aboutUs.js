define(["jquery","text!modules/aboutUs/aboutUs.html","css!modules/aboutUs/aboutUs.css"],function($,html){
	function render(){
		$("body").empty();
		$("body").append(html);		
	}
	return {
		render:render
	}
})