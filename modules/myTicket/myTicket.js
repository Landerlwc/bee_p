define(["jquery","text!modules/myTicket/myTicket.html","css!modules/myTicket/myTicket.css"],function($,html){
	function render(){
		$("body").empty();
		$("body").append(html);
		$("#useStation a").on("click",function(){
			$("#useStation a").css("border","none");
			$(this).css("borderBottom","2px solid #ff3800");
		})
	}
	return {
		render:render
	}
})