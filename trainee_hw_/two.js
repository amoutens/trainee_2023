import promptSync from 'prompt-sync';
const prompt = promptSync();
function randomNumber() {
  let number = 0;
  for(let i = 0; i < 10; i++) {
      number = (((Math.random() * 6) + 5)).toFixed(2);
      console.log(number);
  }
}

export {randomNumber as secondTask};
