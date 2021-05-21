function addPromise(a,b){
    return new Promise((resolve,reject)=>{
        const d = a+b
        if(d<100){
            resolve(d)
        }
        else{
            reject("Addition not possible")
        }
    })
}

function subPromise(a,b){
    return new Promise((resolve,reject)=>{
        const d = a-b
        if(d<50){
            resolve(d)
        }
        else{
            reject("Subtraction not possible")
        }
    })
}

addPromise(10,80).then((data)=>{
    console.log("Addition result is "+data)
    subPromise(data,60).then((data)=>{console.log("Subtraction result is "+data)}).catch((error)=>{console.error(error)})
}).catch((error)=>{console.error(error)})