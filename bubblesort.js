var bubbleSort = function(array){
  // create a temp var to hold the value of the element in case it has to be switched
  var t;   
  // create a loop that repeats n-1 times
  for(var j = 0; j < array.length-1; j++) {  
    // create a loop to iterate through the array
    for( var i = 0; i < array.length; i++) {
      // compare if element is bigger than the next 
      if (array[i] > array[i+1]) {
        // store the value of element to the temp var 
        t = array[i+1];
         // replacing the value of the next element with the previous element
         array[i+1] = array[i];
        //restoring the value of var t 
        array[i]=t;  
      }    
    }
  } 
  // return the sorted array 
  return array;  
};

// call the function with an array
console.log(bubbleSort([6,5,2,9,1,4,10]));
 

/*Explain how the bubble sorting algorithm works:
Answer:  the bubble sorting algorithm works by iterating 
through an array while comparing the value of each element with 
the next element and switching them if one is greater than the other. 
It will repeat n - length of the array until all elements are in order.*/