function customSort(sortArray, print){
    sortArray.sort(function(a, b){return a-b});
  print(sortArray);
}

function print(array){
  console.log(array);
}

customSort([10, 2, 5, 1, 9], print)