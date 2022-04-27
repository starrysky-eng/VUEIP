let isFlag = true;
let p = new Promise((resolve,reject) =>{
    if(isFlag){
        resolve("success");
    }else{
        reject("fail");
    }
});
p.then((message) => {
    console.log(message);
}).catch((errorMessage) => {
    console.log(errorMessage);
})