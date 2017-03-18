define(["jquery","text!modules/customService/customService.html","css!modules/customService/customService.css"],function($,html){
		function render(){
			$("body").empty();
			$("body").append(html);
		}
		return {
			render:render
		}
})