define(["jquery","text!modules/myOrder/list.html","css!modules/myOrder/list.css"],function($,html){
	function render(){
		var arr=["#myOrder","#obligation","#accept","#evaluate","#refund"]
		$("body").empty();
		$("body").append(html);
		var hash=location.hash;
		var index=arr.indexOf(hash);
		console.log(index);
		$("#listNav a").css("border","none");
		$("#listNav a").eq(index).css("borderBottom","1px solid red").css("color","red");
	}
	return {
		render:render
	}
})