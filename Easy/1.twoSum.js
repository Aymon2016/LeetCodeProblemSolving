var twoSum = function(arr, target) {
     let output = [ ]
    for (let i = 0; i < arr.length; i++) {
        let lastNum = target -arr[i]
       for (let j = i+1; j < arr.length; j++) {
            if(arr[j]==lastNum){
                output.push(i,j)
                break
            }
           
       }
       if(output.length!==0){
        break
       }
        
    }
    return output
};