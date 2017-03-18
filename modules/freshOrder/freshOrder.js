define(["jquery","text!modules/freshOrder/freshOrder.html","modules/footer/footer","css!modules/freshOrder/freshOrder.css"],function($,html,footer){
	function render(){
		$("body").empty();
		$("body").append(html);
		$(function(){
			getItems(0);
			$("#classify a").eq(0).css("color","black");
		})
		$("#classify a").on("click",function(){
			var pIndex=$(this).parent().index();
			var index=$(this).index();
			getItems(pIndex*5+index);
			$("#classify a").css("border","none").css("color","#898989");
			$(this).css("borderBottom","1px solid #595656").css("color","black")
		})
		function getItems(num){
			$.ajax({
				type:"get",
				url:"http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
				success:function(res){
					var obj=JSON.parse(res);
					$("#container").empty();
					$.each(obj.product,function(m,n){
						if(m>=num*7&&m<(num+1)*7){
							$("<li>").append(
								$("<img>").attr("src",n.img).addClass("img1")
								).append(
								$("<a>").addClass("orderAdd")
								).append(
								$("<div>").append(
									$("<p>").addClass("orderP1").html(n.name)
									).append(
									$("<p>").html(n.specifics).addClass("orderP2")
									).append(
									$("<p>").append(
										$("<span>").addClass("orderSp1").html("¥"+n.price)
										).append(
										$("<span>").addClass("orderSp2").html("\¥"+n.market_price)
										)
									)
								).appendTo($("#container"))		
						}
					})
				}
			})
		}
		footer.render();
	}
	return {
		render:render
	}
})