def reverse_word(word):
  result = ""
  for letter in word:
    result = letter + result
  return result

def reverse_all_words(phrase):
  words = phrase.split(" ")
  reversed_words = []
  for word in words:
    reversed = reverse_word(word)
    reversed_words.append(reversed)
  result = " ".join(reversed_words)
  return result

function reverseWords(word){
    let result = "";
    for (let letter of word){
        result = letter + result
    }return (result)
}
function reverseAllWords(phrase){
    let words = phrase.split(" ");
    let reversedWords = [];
    for (let word of words){
        let reversed = reverseWords(word);
        reversedWords = reversed.concat(reversedWords)
    }
}
let phrase = "deadpool and captain america";
reverseAllWords(phrase);