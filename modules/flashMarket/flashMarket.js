define(["jquery","text!modules/flashMarket/flashMarket.html","modules/header/header","modules/footer/footer","css!modules/flashMarket/flashMarket.css"],function($,html,header,footer){
	function render(){
		$("body").empty();
		$("body").append(html);
		header.render();
		footer.render();
		getMarketItems("热销榜");
		$("#marketNav li:lt(4)").on("click",function(){
		var category=$(this).children("a").html().trim();
		$("#marketNav li:lt(4) a").css("borderLeft","none");
		$(this).children("a").css("borderLeft","3px solid #ffd600");
		getMarketItems(category);
	})
	}
	function getMarketItems(_category){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php",
			data:{category:_category},
			success:function(res){
				var obj=JSON.parse(res);
				$(".show").empty();
				$.each(obj.data,function(m,n){
					var oDiv=$("<div>");
					oDiv.append(
						$("<p>").addClass("marketP1").html(n.name)
						)
					if(n.pm_desc){
						oDiv.append(
							$("<p>").addClass("marketP2").html(n.pm_desc)
						)
					}
					oDiv.append(
							$("<p>").addClass("marketP3").html(n.specifics)
							).append(
							$("<p>").addClass("marketP4").append(
								$("<span>").addClass("marketSp1").html("¥"+n.price)
								).append(
								$("<span>").addClass("marketSp2").html("¥"+n.market_price)
								)
							).append(
							$("<span>").addClass("marketAdd").html("+")
							)
					$("<li>").append(
						$("<img>").attr("src",n.img)
						).append(oDiv).appendTo($(".show"))
				})
			}
		})
	}
	return {
		render:render
	}
})