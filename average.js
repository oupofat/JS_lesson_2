Average
def average(numbers):
  total = 0
  for num in numbers:
    total += num
  return total / len(numbers)

function average(numbers){
    let total = 0;
    for (let number of numbers){
        total += number
    }
    let average = total/numbers.length;
    console.log(average);
}
  
let numbers = [1,4,2,6,4,9,2,6];
average(numbers);