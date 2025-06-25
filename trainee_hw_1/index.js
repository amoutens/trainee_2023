const prompt = require("prompt-sync")();
function First_task(){
    return console.log("adsfslfaf");
}
function Second_Task(){
    return console.log("Hello world!");
}
function Third_task(){
    return console.log((0.48+3/(0.2-0.1)+3.14*2**4)*25);
}
function Fourth_task(){
    let x=1,y=2,m=0.5,n=0.3;
    return console.log((2*m*x+3*n)*y);
}
function Fifth_task(){
    let NAME=prompt();
    return console.log("Hello "+NAME);
}
function Sixth_task(){
    let a=prompt();
    let b=prompt();
    return console.log(a+b);
}
function Seventh_task(){
    let a=prompt();
    let b=prompt();
    let c=prompt();
    let res=+a+Number(b)+Number(c);
    return console.log(Math.min(a,b,c), res-Math.min(a,b,c)-Math.max(a,b,c,) , Math.max(a,b,c));
}
function Eights_task(){
    let a=prompt(),b=prompt();
    return console.log(a**2+b**2);
}
function Ninth_task(){
    let a=prompt(),b=prompt();
    return console.log(a/b);
}
function Tenth_task(){
    let a=prompt();
    let res=a%10;
    let l=a.length;

    return console.log(a[l-1], res);
}

//11-th task a=1,b=1,c=2, d=1;
//12-th task 1, true, "allaaacls", null, [1,2,3,4,5,6,7,8]

function Thirteenth_task(){
    let a=1,b=false,c="castiel",d=null, e=undefined;
    return console.log(a,b,c,d,e);
}
function Fourteenth_task(){
    let a=10,b=10.1,c=109n,d=1e-3;
    return console.log(a,b,c,d);
}
function Fifteenth_task(){
    let a=prompt();
    if(a!=NaN){
        console.log(a);
    }
}
function Sixteenth_task(){
    //конкатенція - це об'єднання рядків за допомогою "+".
    let b=prompt();
    return console.log(`You entered ${b}`);
}
//17. 0
function Eighteenth_task(){
    let a=false,b=true;
    return console.log(a,b);
}
function Nineteenth_task(){
    let a='', b=0;
    return console.log(Boolean(a), Boolean(b));
}
function Twenty_task(){
    let a="", b=false;
    return console.log(+a,+b);
}
function Twenty_first_task(){
    let a='sdkdkkd';
    return console.log(+a);
}
function Twenty_second_task(){
    //52,-1,-5,1,2,6,9px,$45, 2, NaN, -9 5, -14, 1,NaN, 0, -2
    return console.log("Result");
}
function Twenty_third_task(){
    let time=prompt();
    let hour=Math.floor(time/3600);
    let minutes=Math.floor((time%3600)/60);
    let sec=time-hour*3600-minutes*60;
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(sec<10){
        sec="0"+sec;
    }
    return console.log(hour+':'+minutes+":"+sec);
}
function Twenty_fourth1_task(){
    let a=prompt();
    if(a>-5) {
        if(a<=0){
                return console.log(true);
        }
    }
    else if(a>=7){
        if(a<21){}
        return console.log(true);
    }
    else{
        return console.log(false);
    }

}
function Twenty_fourth2_task(){
    let a=prompt();
    if((a>-5 && a<=0)||(a>=7 && a<21)){
        return console.log(true);
    }
    else {
        return console.log(false);
    }

}

function Twenty_fifth_task(){
    let a=prompt();
    let length=a.length;
    let word;
    if(a[length-1]==1 && a!=11) {
        word="жаба";
    }
    else if(a[length-1]>=2 && a[length-1]<=4 && a!=12 && a!=13 && a!=14) {
        word="жаби";
    }
    else {
        word="жаб";
    }
    return console.log(a+" "+ word);
}
