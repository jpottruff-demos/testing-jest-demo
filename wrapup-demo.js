const functions = {
  reverseString: str => 
    str
     .split('')
     .reverse()
     .join('')
  ,

  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  chunkArr: (arr, len) => {
      // Init chunked arr
      const chunkedArr = [];
      // Set index
      let i = 0;
    
      // Loop while index is less than the array length
      while (i < arr.length) {
        // Slice out from the index to the index + the chunk length nd push on to the chunked array
        chunkedArr.push(arr.slice(i, i + len));
        // Increment by chunk length
        i += len;
      }
  
      return chunkedArr;
  }

  
}


module.exports = functions;