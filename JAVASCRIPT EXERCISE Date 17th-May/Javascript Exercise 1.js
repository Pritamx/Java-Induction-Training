var weight=80
var height=1.8034
bmi = weight/(height*height)
if(bmi<=18.5)
  console.log("Underweight")
else if(bmi<=24.9)
  console.log("Normal weight")
else if(bmi<=29.9)
  console.log("Overweight")
else if(bmi<=34.9)
  console.log("Obesity class 1")
else if(bmi<=39.9)
  console.log("Obesity class 2")
else
  console.log("Obesity class 3")
   