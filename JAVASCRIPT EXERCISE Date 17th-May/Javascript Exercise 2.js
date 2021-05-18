var weight= [72,67,82,93,88]
var height=[1.5,1.6,1.55,1.8,1.7]
for(var index=0;index<weight.length;index++){
    var bmi = weight[index]/(height[index]*height[index])
    var bmi_remarks=""
    if(bmi<=18.5)
      bmi_remarks = "Underweight"
    else if(bmi<=24.9)
      bmi_remarks = "Normal weight"
    else if(bmi<=29.9)
      bmi_remarks = "Overweight"
    else if(bmi<=34.9)
      bmi_remarks = "Obesity class 1"
    else if(bmi<=39.9)
      bmi_remarks = "Obesity class 2"
    else
      bmi_remarks = "Obesity class 3"
    console.log("For Weight: "+weight[index]+" and height: "+height[index]+" BMI Remarks: "+bmi_remarks)
}
   