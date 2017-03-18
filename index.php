<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxa218ce7998b96d2e", "7a74ce2cc54bb62ac2196e1acb473486");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width">
    <script type="text/javascript" src="./lib/jquery.js"></script>
    <script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=d9931622fd247346ee05ec4e07213beb"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript" src="./lib/require.js" data-main="main"></script>
    <script type="text/javascript" src="clientSize.js"></script>
</head>
<body>
    
</body>
<script type="text/javascript">
    wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
        "scanQRCode","getLocation"
      // 所有要调用的 API 都要加到这个列表中
    ]
  })   
    setTimeout(function(){
         wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                AMap.service('AMap.Geocoder',function(){//回调函数
                        //实例化Geocoder
                        geocoder = new AMap.Geocoder({
                            city: "010"//城市，默认：“全国”
                        });
                        //TODO: 使用geocoder 对象完成相关功能
                      var lnglatXY=[longitude,latitude];//地图上所标点的坐标
                        geocoder.getAddress(lnglatXY, function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                               //获得了有效的地址信息:
                               //即，result.regeocode.formattedAddress
                                $(".header-location span").eq(0).html(result.regeocode.formattedAddress)
                            }else{
                               //获取地址失败
                               alert("获取地址失败")
                            }
                        });                          
                    
                    })
   
            }
        });
    },2000) 
</script>
</html>  