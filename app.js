// var nd = require('needle')
// var url = "https://jsonplaceholder.typicode.com/todos/1"
// nd.get (url,(err,response,body)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(body)
//     }
// })
// https://api.themoviedb.org/3/movie/top_rated?api_key=564e8a53525de43f0e3d30b331c41f5f&language=en-US&page=1

// var nd = require('needle')
// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=564e8a53525de43f0e3d30b331c41f5f&language=en-US&page=1"

// nd.get (url,(err,response,body)=>{
//     if(err){
//         console.log(err) 
//     }
//     else{
//         console.log(body)
//     }      
// })

//
// var nd = require('needle')
// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=564e8a53525de43f0e3d30b331c41f5f&language=en-US&page=1"
// nd.get(url,(err,respone,body)=>{
//      if(err)
//      console.log(err)
//        else{
//            var results =body.results
//            for(ele in results)
//               console.log(results[ele].title)
//        }
//     })
//https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoibGlraGl0aGEtZGFuZHUiLCJhIjoiY2wzbzBxMjc3MGp4NzNldXZqdXA1ZG5zMyJ9.H0dzqH8TPgXCWJmBxeImgQ

// var nd = require('needle')
// var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoibGlraGl0aGEtZGFuZHUiLCJhIjoiY2wzbzBxMjc3MGp4NzNldXZqdXA1ZG5zMyJ9.H0dzqH8TPgXCWJmBxeImgQ"


// nd.get (url,(err,response,body)=>{
//     if(err){
//         console.log(err) 
//     }
//     else{
//         console.log(JSON.parse(body))
//     }
// })

//e65ef58cea89ce97de90933154743d00

//http://api.weatherstack.com/current?access_key="e65ef58cea89ce97de90933154743d00"&query="New York"

// var nd = require('needle')
// var url = "http://api.weatherstack.com/current?access_key=e65ef58cea89ce97de90933154743d00&query=New York"
// nd.get (url,(err,response,body)=>{
//     if(err){
//         console.log(err) 
//     }
//     else{
//         console.log(body)
//     }      
// })

// var nd = require('needle')
// var url = "http://api.weatherstack.com/current?access_key=e65ef58cea89ce97de90933154743d00&query=Bhimavaram"
// nd.get (url,(err,response,body)=>{
//     if(err){
//         console.log(err) 
//     }
//     else{
//         console.log(body)
//     }      
// })

// var nd = require('needle')
// var url = "http://api.weatherstack.com/current?access_key=e65ef58cea89ce97de90933154743d00&query=Bhimavaram"
// nd.get (url,(err,response,body)=>{
//     if(err){
//         console.log(err) 
//     }
//     else{
//         console.log(body.current.temperature)
//         console.log(body.location.lat)
//         console.log(body.location.lon)
//         var desc = body.current.weather_descriptions
//         for(ele in desc)
//           console.log(desc[ele])
//     }      
// })

// var nd = require('needle')
// for(var i = 0; i< 500;i++){
//    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=564e8a53525de43f0e3d30b331c41f5f&language=en-US&page="+i
// nd.get(url,(err,respone,body)=>{
//      if(err)
//      console.log(err)
//        else{
//               var results =body.results
//            for(ele in results)
//               console.log(results[ele].title)
//        }
//     })
// }

// var nd = require('needle')
// for(var i = 0; i< 500;i++){
//    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=564e8a53525de43f0e3d30b331c41f5f&language=en-US&page="+i
// nd.get(url,(err,respone,body)=>{
//      if(err)
//      console.log(err)
//        else{
//               var results =body.results
//            for(ele in results)
//               if(results[ele].original_language == 'hi')
//                   console.log(results[ele].title)
//        }
//     })
// }

var nd = require('needle')
for(var i = 0; i< 500;i++){
   var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=564e8a53525de43f0e3d30b331c41f5f&language=en-US&page="+i
nd.get(url,(err,respone,body)=>{
     if(err)
     console.log(err)
       else{
              var results =body.results
           for(ele in results)
              if(results[ele].original_language == 'te')
                  console.log(results[ele].title)
       }
    })
}