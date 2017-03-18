define(["jquery","text!modules/my/my.html","modules/footer/footer","css!modules/my/my.css"],function($,html,footer,list){
	function render(){
		$("body").empty();
		$("body").append(html);
		footer.render();
	}
	return {
		render:render
	}
})