function clock(){
    let date=new Date();
    let hours=date.getHours();
    let seconds=date.getMinutes();
    let minuts=date.getSeconds();
    let flag='AM';
    
    // console.log(date);
    if(hours==0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        flag="PM";
    }
    if(hours<10) hours="0"+hours;
    if(minuts<10) minuts="0"+minuts;
    if(seconds<10) seconds="0"+seconds;
    document.querySelector('.clock').innerText=`${hours}:${minuts}:${seconds}`;
    setTimeout(function(){
        clock();
    },1000)
}

clock();