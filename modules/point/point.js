define(["jquery","text!modules/point/point.html","css!modules/point/point.css"],function($,html){
	function render(){
		$("body").empty();
		$("body").append(html);
	}
	return {
		render:render
	}
})