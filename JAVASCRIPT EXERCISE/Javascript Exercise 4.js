function average(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
      sum = sum + arr[i]
    }
    return sum/arr.length
  }
  
  var score=[[70,84,69],[65,81,45],[66,96,45]]
  
  for(var i=0;i<score.length;i++){
    console.log("Summary of student "+(i+1)+" is "+average(score[i]))
  }