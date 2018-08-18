module.exports = chat;


function chat(app, io, rndstring){
  function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
    if (n.length < digits) {
      for (i = 0; i < digits - n.length; i++)
        zero += '0';
      }
      return zero + n;
  }
  function getWorldTime(tzOffset) { // 24시간제
    var now = new Date();
    var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
    now.setTime(tz);
    var aft;
    if(leadingZeros(now.getHours(), 2) >= 12)
      aft =  "오후 " + (leadingZeros(now.getHours(), 2)-12);
    else aft = "오전 " + leadingZeros(now.getHours(), 2)
    var s =
    //leadingZeros(now.getFullYear(), 4) + '-' +
    //leadingZeros(now.getMonth() + 1, 2) + '-' +
    //leadingZeros(now.getDate(), 2) + ' ' +
    aft + ':' +
    leadingZeros(now.getMinutes(), 2)
    //leadingZeros(now.getSeconds(), 2);
    return s;
  }
  // room 번호를 안드에서 요청.
  // var roomID = rndstring.generate(15);
  io.on('connection', (socket)=>{
    socket.on('join room', (room)=>{
      console.log(room)
      var text = name + "님이 방에 들어왔습니다.";
      io.to(room).emit('welcome room', "success!");
      socket.join(room);
    })
    socket.on('leave room', (room)=>{
      console.log(room)
      var text = name + "님이 방에서 나갔습니다.";
      io.to(room).emit('goodbye room', name, text);
      socket.leave(room);
    })
    socket.on('send message', (index, room)=>{
      var time = getWorldTime(+9);
      var returnMsg = {
        "index" : index,
        "room" : room,
        "time" : time
      }
      console.log(returnMsg.time)
      socket.broadcast.to(room).emit('receive message', returnMsg);
    })
  })


}
