define(["jquery","text!modules/homepage/homepage.html","modules/header/header","modules/footer/footer","css!modules/homepage/homepage.css","css!modules/homepage/swiper-3.4.0.min.css","modules/homepage/swiper-3.4.0.min"],function($,html,header,footer){
	function render(){
		$("body").empty();
		$("body").append(html);
		getAjax("get","http://www.vrserver.applinzi.com/aixianfeng/apihome.php",slide);
		getAjax("get","http://www.vrserver.applinzi.com/aixianfeng/apihome.php",menu);
		getAjax("get","http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",hotSale)
		header.render();
		footer.render();
	}
	function slide(res){
	var obj=JSON.parse(res);
			$.each(obj.data.slide,function(m,n){
				$("<div>").append(
					$("<a>").append(
						$("<img>").attr("src",n.activity.img)
						)
					).addClass("swiper-slide").appendTo($(".swiper-wrapper"))
			});
			var mySwiper = new Swiper('.swiper-container', {
					autoplay: 3000,//可选选项，自动滑动
					pagination : '.swiper-pagination',
					loop:true,
					speed:800,
				})
	}
	function menu(res){
	var obj=JSON.parse(res);
			$.each(obj.data.menu,function(m,n){
				if(n.activity.name=="疯狂秒杀"){
					$("<a>").attr("href","#crazy").append($("<img>").attr("src",n.activity.img)).append($("<span>").html(n.activity.name)).appendTo($("nav"))
				}else{
					$("<a>").append($("<img>").attr("src",n.activity.img)).append($("<span>").html(n.activity.name)).appendTo($("nav"))
				}
			});
	}
	function getAjax(_type,_url,_callBack){
		$.ajax({
			type:_type,
			url:_url,
			success:_callBack
		})
	}
	function hotSale(res){
		var obj=JSON.parse(res);
		var bottom=document.querySelectorAll(".bottom");
		var num=0;
		for(var i=0;i<bottom.length;i++){
			for(var j=num;j<num+3;j++){
				var oli=$("<li>");
				oli.append(
					$("<a>").append(
						$("<img>").attr("src",obj.data[j].img)
						)
					).append(
					$("<p>").addClass("p1").html(obj.data[j].name)
					)
					if(obj.data[j].pm_desc){
						oli.append($("<p>").addClass("p2").html(obj.data[j].pm_desc)
					)}
					if(obj.data[j].pm_desc){
						oli.append($("<p>").addClass("free").html(obj.data[j].pm_info)
					)};
					oli.append(
					$("<p>").addClass("p3").html(obj.data[j].specifics)
					).append(
					$("<p>").addClass("p4").append(
						$("<span>").addClass("sp1").html("¥"+obj.data[j].price)
						).append(
						$("<span>").addClass("sp2").html("¥"+obj.data[j].market_price)
						)
					).append(
					$("<span>").addClass("add").html("+")
					).appendTo($(".bottom").eq(i))
			}
			num+=3;
		}
	}
	return {
		render:render
	}
})