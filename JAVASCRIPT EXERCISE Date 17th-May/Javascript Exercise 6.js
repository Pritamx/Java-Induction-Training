var cars=[{
    name:"Verna",
    distance:450,
    fuel:26,
    milage:function(){
        return this.distance/this.fuel
    },
    display:function(){
        if(this.milage()<12)
            console.log(this.name+" Has Low Milage")
        else
            console.log(this.name+" Has Better Milage")
    }},
    {
    name:"Elantra",
    distance:255,
    fuel:13.2,
    milage:function(){
        return this.distance/this.fuel
    },
    display:function(){
        if(this.milage()<12)
            console.log(this.name+" Has Low Milage")
        else
            console.log(this.name+" Has Better Milage")
    }},
    {
    name:"Tucson",
    distance:297,
    fuel:27,
    milage:function(){
        return this.distance/this.fuel
    },
    display:function(){
        if(this.milage()<12)
            console.log(this.name+" Has Low Milage")
        else
            console.log(this.name+" Has Better Milage")
    }}]
    
for(var i=0;i<cars.length;i++){
    cars[i].display();
}