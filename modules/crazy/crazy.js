define(["jquery","text!modules/crazy/crazy.html","css!modules/crazy/crazy.css"],function($,html){
	function render(){
		$("body").empty();
		$("body").append(html);
		$.ajax({
	type:"get",
	url:"http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",
	success:function(res){
		var obj=JSON.parse(res);
		$.each(obj.product,function(m,n){
			var div=$("<div>");
			div.append(
				$("<p>").html(n.name).addClass("crazyP1")
				).append(
				$("<p>").html(n.specifics).addClass("crazyP2")
				).append(
				$("<p>").append(
					$("<span>").html("¥"+n.price).addClass("crazySp1")
					).append(
					$("<span>").html("/原价:"+n.market_price+"元").addClass("crazySp2")
					)
				)
				if(n.btnText!="已抢光"){
					div.append($("<a>").html(n.btnText).addClass("isHas"))
				}else{
					div.append($("<a>").html(n.btnText).addClass("noHas"))
				};
			$("<div>").appendTo($("#crazyMain")).append(
				$("<img>").attr("src",n.img)
				).append(div
				).addClass("crazyList");
		})
	}
})
	}
	return {
		render:render
	}
})