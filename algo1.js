function sent(str){
    return {
        chars : str.length,
        words : str.split(' ').length,
        vowls : str.match(/a|e|i|o|u/gi).length
    }
}


// testing
let text = "the quick brown fox jumps over the lazy dog.";
let sent1 = sent(text);
console.log(`the sentence contains ${sent1.chars} characters, ${sent1.words} words, and ${sent1.vowls} vowels`);