import promptSync from 'prompt-sync';
const prompt = promptSync();

import * as one from './one.js';
import * as two from './two.js';
import * as three from './three.js';
import * as four from './four.js';
import * as five from './five.js';
import * as six from './six.js';
import * as seven from './seven.js';
import * as eight from './eight.js';




let object= {
    1 :one.firstTask,
    2 :two.secondTask,
    3 :three.thirdTask,
    4 :four.fourthTask,
    5 :five.fifthTask,
    6 : {
        1:six.taskWithMethods,
        2:six.taskWithoutMethods
    },
    7: seven.seventhTask,
    8 : {
        1:eight.taskWithCycle,
        2:eight.taskWithRecur,
        3:eight.taskWithZamyk
    }
};
console.log( "Введіть номер потрібного завдання" );
let nom = prompt();
object.f = object[nom];

while (nom != '') {
  if ((nom >= 1 && nom <= 5) || nom == 7) {
      object[nom]();
  } else if (nom == 6 || nom == 8) {
      console.log("Введіть підзадачу Вашої задачі:");
      let pidNom = prompt();
      object[nom][pidNom]();
  }
  console.log( "\nВведіть номер потрібного завдання" );
  nom = prompt();
}


