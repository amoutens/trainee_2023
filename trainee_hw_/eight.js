import promptSync from 'prompt-sync';
const prompt = promptSync();
function factCycle() {
  console.log("Введіть число");
  let num = +prompt();
  let res = 1;

  for(let i = 1; i <= num; i++) {
      res *= i;
  }

  console.log(res);
}
function factRecur() {
  console.log("Введіть число");
  let num= +prompt();
  function Recur_f(a) {
      if (a == 1) {
          return a;
      }
      else {
          return (Recur_f(a - 1) * a);
      }
  }
  console.log(Recur_f(num));
}
function factClosure() {
    let counter = prompt();
    function makeFact(count) {
        let a = --count;
        let res = 1;
        for (let i = 1; i <= a; i++) {
            res *= i;
        }
        return function () {
            res *= ++a;
            return  res;
        }
    }

    let num = makeFact(counter);
    console.log(num());
    console.log(num());
    console.log(num());
    console.log(num());
    console.log(num());
}

export {factCycle as taskWithCycle, factRecur as taskWithRecur, factClosure as taskWithZamyk}