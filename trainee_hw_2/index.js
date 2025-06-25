const prompt = require("prompt-sync")();
const util = require("util");
function First_task(){
    let animal='';
    let number=0;
    let Object_animal={};
    do{
        animal = prompt();
        if(animal=='show') break;
        number = prompt();
        Object_animal[number]=animal;

    }while(animal!='show' );
    for(let key in Object_animal){
        console.log(key,Object_animal[key]);
    };
    }
function Second_Task(){
    let obj={
        string:"stringtype",
        number: 1234456,
        symbol: Symbol("ahdh"),
        boolean: true,
        object:{mini_object:124564},
        bigint:1234n,
        function:function akdkd() {return "devbrn"},
        undefined:undefined
    }
    function Keys_of_object(object,name){
        return console.log(name,object[name],typeof(object[name]))
    }
    let name_of_key=prompt();
    Keys_of_object(obj,name_of_key);
    let func_obj=new Object();


}
function Third_task(){
    let object_test={
        string1:"stringtype",
        number1: 1234456,
        symbol1: Symbol("ahdh"),
        boolean1: true,
        bigint1: 1234n,
        undefined1:undefined
    }


    function Mean_to_key(obj){
        for(let key in obj){
        let a=obj[key];
        obj[a]=key;
        delete obj[key];}
    }
    //Mean_to_key(object_test);
    console.log(object_test);
    function key_to_type(obj){
        for(let key in obj){
        let b=typeof obj[key];
        obj[b]=obj[key];
        delete obj[key];
        }
    }

    key_to_type(object_test);
    console.log(object_test);


}

function Fourth_task(){
    let animal={
        name:"Freddy",
        type:"Canary",
        age:4
    }
    function sayHi(a) {
        return console.log(`${a}, ${this.name}`);
    }
    let greeting=prompt();
    animal.f=sayHi;
    animal.f(greeting);
}

function Fifth_task(){
    function is_Simple(n) {
        if (n === 2) {
            return 'Просте';
        }

        let i = 2;
        const limit = Math.sqrt(n);
        while (i <= limit) {
            if (n % i === 0) {
                return 'Складене';
            }
            i +=1;
        }

        return 'Просте';
    }

    let number1=prompt();
    let object={};
    function create_object(obj,number){
    for(let i=2;i<=number;i++){
            obj[i]=is_Simple(i);
    }
    console.log(obj);}
    function output_simples(obj){
        for(let key in obj){
            if (obj[key]=="Просте"){
                console.log(key);
            }
        }
    }
    create_object(object,number1);
    output_simples(object);
}


function Sixth_task(){
    let obj={
        ad : function ad (a,b) {return a+b},
        sub : function sub(a,b) {return a-b},
        mul : function multiply(a,b) {return a*b},
        div : function div(a,b) {return a/b},
        pow : function pow(a,b) {return a**b},
        rem : function rem(a,b) {return a%b}};


    let a = +prompt() , b = +prompt() , action = prompt();
    obj.f = obj[action];

    console.log(obj.f(a,b));




}

function Seventh_task(){
    let znach=prompt(); typ=prompt();
    switch(typ){
        case 'string':
            console.log(String(znach),typeof String(znach));
            break;
        case 'number':
            console.log(Number(znach),typeof +znach);
            break;
        case 'boolean':
            console.log(Boolean(znach),typeof Boolean(znach));
            break;
        case 'object':
            console.log({obj:znach},typeof {'znach':znach});
            break;
        case 'symbol':
            console.log(Symbol(znach),typeof Symbol(znach));
            break;
        default:
            console.log(BigInt(znach),typeof BigInt(znach));
            break;
    }
}

function Eights_task(){
    let znach=prompt(),typ=prompt();
    let obj={
        'string':{
            result:String(znach),
            type:typeof String(znach)
        },
    'number': {
            result:Number(znach),
            type: typeof +znach
    },
    'boolean':{
            result:Boolean(znach),
            type:typeof Boolean(znach)
    },
    'object': {
            result:{'znach':znach},
            type:typeof {obj:znach}
    },

    'symbol':{
            result:Symbol(znach),
            type:typeof Symbol(znach)
        },
    'bigint': {
            result:BigInt(znach),
            type:typeof BigInt(znach)
    }
    };
    console.log(obj[typ].result,obj[typ].type);
}

