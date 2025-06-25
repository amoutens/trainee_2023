function helloWorld() {
    let word='Hello world!';

    console.log(word.substr(-4,4));
    console.log(word.slice(0,5));
    console.log(word.substring(1,7) );
    console.log(word.substr(-5,5));

    let wordCount = 1;
    for(let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            wordCount++;
        }
    }

    console.log(wordCount);
}

export {helloWorld as fourthTask}