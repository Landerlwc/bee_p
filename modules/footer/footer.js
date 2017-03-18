define(["jquery","text!modules/footer/footer.html","css!modules/footer/footer.css"],function($,html){
	function render(){
		var img1=["footer1.png","footer2.png","footer3.png","footer4.png","footer5.png"],
			img2=["footer11.png","footer22.png","footer33.png","footer44.png","footer55.png"],
			arr=["#homepage","#flashMarket","#freshOrder","#shoppingCar","#my"];
		$("body").append(html);
		for(var i=0;i<img1.length;i++){
			$("footer a").eq(i).css("background","url(modules/images/"+img1[i]+") no-repeat 47% 25%").css("backgroundSize","40% 40%")
		}
		var hash=location.hash;
		var index=arr.indexOf(hash);
		$("footer a").eq(index).css("background","url(modules/images/"+img2[index]+") no-repeat 47% 25%").css("backgroundSize","40% 40%");
	}
	return {
		render:render
	}
})