module.exports = drink

function drink(app, request){
  app.post('/drink', async (req,res)=>{
    res.send('미완')
  })
}
