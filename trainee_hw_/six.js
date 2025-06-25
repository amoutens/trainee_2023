import promptSync from 'prompt-sync';
const prompt = promptSync();
function zooWithMethods() {
    let zoo = [];
    let animal = "0";
    console.log( "Введіть ваших тваринок" );
    while (animal != '') {
        animal = prompt();
        zoo.push(animal);
    }

    console.log( "З якого боку Ви хочете отримати тваринку?" );

    let side = prompt();
    console.log( 'Ось, хто пішов з зоопарку:' );
    if (side == "start") {
        console.log(zoo.shift());

    }
    else if (side == "end") {
        console.log(zoo.at(-2));
        zoo.pop();
    }
    console.log('\n');
    console.log( "Ось, які тваринки залишилися в нашому зоопарку:" );
    for(let i = 0; i < zoo.length-1; i++) {
        console.log(zoo[i]);
    }
}
function zooWithoutMethods() {
    let zoo = [];
    let animal = "0";
    console.log( "Введіть ваших тваринок" );
    let i=0;

    while (animal != '') {
        animal = prompt();
        zoo[i] = animal;
        i++
    }

    console.log( "З якого боку Ви хочете отримати тваринку?" );
    let side = prompt();
    console.log( 'Ось, хто пішов з зоопарку:' );
    if (side == "start") {
        console.log(zoo[0]);
        console.log('\n');

        console.log( "Ось, які тваринки залишилися в нашому зоопарку:" );
        for(let i = 0; i < zoo.length-1; i++) {
            zoo[i] = zoo[i+1];
        }
        zoo.length--;
        for(let i = 0; i < zoo.length; i++) {
            console.log(zoo[i]);
        }

    }
    else if (side == "end") {
        console.log(zoo.at(-2));
        console.log('\n');

        console.log( "Ось, які тваринки залишилися в нашому зоопарку:" );
        zoo.length--;
        for(let i = 0; i < zoo.length-1; i++) {
            console.log(zoo[i]);
        }
    }

}

export {zooWithMethods as taskWithMethods, zooWithoutMethods as taskWithoutMethods}