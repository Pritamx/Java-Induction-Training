function calc_area(base,height,cbfn){
    area=0.5*base*height
    cbfn(area)
}

calc_area(2,3,function(x){
    console.log("The area is "+x)
})
