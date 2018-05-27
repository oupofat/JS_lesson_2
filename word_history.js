def word_histogram(phrase):
  histogram = {}
  words = phrase.split(" ")
  for word in words:
    if word not in histogram:
      histogram[word] = 0
    histogram[word] += 1
  return histogram


function wordHistory(phrase){
    let histogram = {};
    let words = phrase.split(" ");
    for (let word of words){
        if (!(word in histogram))
            histogram[word]=0;
        histogram[word]+= 1;
        
    }console.log(histogram)
    return histogram;
    
} 
let phrase = "deadpool and captain america deadpool and captain america"
wordHistory(phrase);