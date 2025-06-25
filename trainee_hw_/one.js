import promptSync from 'prompt-sync';
const prompt = promptSync();
function chooseType() {
    console.log( "Виберіть тип округлення: \n" +
                  "1)parseInt, 2)Math.ceil(), 3)Math.floor(), 4)Math.round(), 5)toFixed()" );
    let action = prompt();

    console.log("Введіть число, яке потрібно округлити:");
    let number = +prompt();

    let obj= {
        1: function First(number){return parseInt(number)},
        2: function Second(number){return Math.ceil(number)},
        3: function Third(number){return Math.floor(number)},
        4: function Fourth(number){return Math.round(number)},
        5: function Fifth(number) {
            console.log( "Введіть номер знаку, до якого потрібно округлити:" );
            let zn = prompt();
            return number.toFixed(+zn)
        }
    }
    obj.f = obj[action];
    console.log(obj.f(number));
}

export {chooseType as firstTask}