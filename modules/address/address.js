define(["jquery","text!modules/address/address.html","css!modules/address/address.css"],function($,html){
	function render(){
		$("body").empty();
		$("body").append(html);
	}
	return {
		render:render
	}
})