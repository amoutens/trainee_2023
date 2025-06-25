import promptSync from 'prompt-sync';
const prompt = promptSync();

function zdanieThird() {
  let M = new Array(5);

  for ( let i = 1; i <= 5; i++) {
      M[i] = new Array(5);
  }

  for ( let i = 1; i <= 5; i++ ) {
      for( let j = 1; j <= 5; j++ ) {
          M[i][j] = (((Math.random() * 6) + 5)).toFixed(2);
      }
  }

  for ( let i = 1; i <= 5; i++ ) {
      for ( let j = 1 ; j<= 5 ; j++ ){
          console.log(`"${M[i][j]}"  `);
      }
      console.log( "\n" );
  }
}

export {zdanieThird as thirdTask}