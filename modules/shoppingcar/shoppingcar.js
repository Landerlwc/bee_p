define(["jquery","text!modules/shoppingcar/shoppingcar.html","modules/footer/footer","css!modules/shoppingcar/shoppingcar.css"],function($,html,footer){
	function render(){
		$("body").empty();
		$("body").append(html);
		footer.render();
	}
	return {
		render:render
	}
})
