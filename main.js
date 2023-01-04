var sec=00
var min=00
var interval

function start() {
  interval= setInterval(counter, 1000)
}

function pause() {
  clearInterval(interval)
}

function stop() {
  clearInterval(interval)
  sec=0
  min=0
  document.getElementById('display').innerHTML='00:00'

}

function counter() {
  sec++
  if(sec==60){
    min++
    sec=0
  }
  document.getElementById('display').innerHTML=min+':'+sec
}

