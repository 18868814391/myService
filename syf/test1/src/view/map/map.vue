<template>
  <div>
    <div class="map-page" id="container"></div>
    <div id="forecast"></div>
  </div>
</template>
<script>
import MapLoader from './mapConfig' 
export default {
  data(){
    return{

    }
  },
  created(){
   
},
  mounted(){
   var map = new AMap.Map('container',{
        zoom:11,//级别 
        resizeEnable: true,
        center: [120.2477, 30.3077],
   });
    var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
    });
    map.add(trafficLayer);//添加图层到地图
    AMap.plugin([
        'AMap.ToolBar',
    ], function(){
        // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        map.addControl(new AMap.ToolBar({
            // 简易缩放模式，默认为 false
            liteStyle: true
        }));
    });
    AMap.plugin('AMap.Weather', function() {
        var weather = new AMap.Weather();
        //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
        weather.getLive('杭州市', function(err, data) {

        });
        //未来4天天气预报
        weather.getForecast('杭州市', function(err, data) {
            if (err) {return;}
            var str = [];
            for (var i = 0,dayWeather; i < data.forecasts.length; i++) {
                dayWeather = data.forecasts[i];
                str.push(dayWeather.date+' <span class="weather">'+dayWeather.dayWeather+'</span> '+ dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
            }
            document.getElementById('forecast').innerHTML = str.join('<br>');
        });
    });




  },
  methods:{

  },
}
</script>
<style lang="scss">
.map-page{
  width: 100%;
  height: 500px;

}
</style>


