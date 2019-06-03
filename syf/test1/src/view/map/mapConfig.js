export default function MapLoader () { // <-- 原作者这里使用的是module.exports

  return new Promise((resolve, reject) => {
  
  if (window.AMap) {
    resolve(window.AMap)
  } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'http://webapi.amap.com/maps?v=1.3&callback=initAMap&key=4881b4b13c0a8d1e91061233e0f337cf'
      script.onerror = reject
      document.head.appendChild(script)
  }
  
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
}