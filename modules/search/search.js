define(["jquery","text!modules/search/search.html","css!modules/search/search.css"],function($,html){
	function render(){
		$("body").empty();
		$("body").append(html);
	}
	return {
		render:render
	}
})