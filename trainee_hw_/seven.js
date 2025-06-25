function dateNow() {
    let date = new Date();
    let res;
    function fullDate(a) {
        if (a < 10) {
           return ('0'+ a).slice(-2);
        }
        else {
            return a;
        }
    }
    let day = fullDate( date.getDate() );
    let month = fullDate(date.getMonth()+1 );
    let year = date.getFullYear();
    let hours = fullDate( date.getHours() );
    let minutes = fullDate( date.getMinutes() );
    let seconds = fullDate( date.getSeconds() );
    res=`${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    console.log(res);
}

export {dateNow as seventhTask}