let startTime,elapsedTime=0,timeInterval
function clock(){
    if(!timeInterval){
        startTime=Date.now()-elapsedTime
        timeInterval=setInterval(function(){
            let currentTime=Date.now()
            elapsedTime=currentTime-startTime
            document.getElementById("min").innerHTML=format(Math.floor((elapsedTime/60000)%60))
            document.getElementById("sec").innerHTML=format(Math.floor((elapsedTime/1000)%60))
            document.getElementById("msec").innerHTML=mformat(Math.floor((elapsedTime%1000)))
        },10)
    }
}

function stop(){
    clearInterval(timeInterval)
    timeInterval=null
}
function reset(){
    clearInterval(timeInterval)
    timeInterval=null
    elapsedTime=0
    document.getElementById("min").innerHTML='00'
    document.getElementById("sec").innerHTML='00'
    document.getElementById("msec").innerHTML='000'
}

function format(time){
    return time<10 ? '0'+time : time;
}

function mformat(time){
    if (time<10){
        return '00'+time;
    }
    else if(time<100){
        return '0'+time;
    }
    else{
        return time;
    }
}