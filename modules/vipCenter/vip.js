define(["jquery","text!modules/vipCenter/vip.html","css!modules/vipCenter/vip.css"],function($,html){
	function render(){
		$("body").empty();
		$("body").append(html);
	}
	return {
		render:render
	}
})