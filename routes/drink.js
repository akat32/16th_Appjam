module.exports = drink

function drink(app, request){
  app.post('/drink', async (req,res)=>{
    var apiurl = "https://map.naver.com/search2/local.nhn?sm=hty&searchCoord=127.097744%3B37.5044545&isFirstSearch=true&query=%EB%AA%A8%ED%85%94&menu=location&mpx=09710105%3A37.5044545%2C127.097744%3AZ10%3A0.0264252%2C0.0582100"
    request(apiurl, (err, response, body)=>{
      let resultArr = [];
      var bodyresult;
      bodyresult = JSON.parse(body);
      for(i=0; i<bodyresult.results.length ;i++){
        var pushsome = bodyresult.results[i].geometry.location;
        pushsome.name = bodyresult.results[i].name;
        resultArr.push(pushsome)
      }
      if(resultArr == null) return res.status(404).json({message : "대피소가 없습니다. 꼭 살아남으시길 바랍니다."})
      else return res.status(200).json({result : resultArr});
    })
  })
}
