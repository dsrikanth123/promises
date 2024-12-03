var a = new Promise((x, y) => {
    if (1) {
        x("prodcut ordered !!!")
    } else {
        y("reject")
    }
})


var b = new Promise((x, y) => {
    if (1) {
        x("shiiped")
    } else {
        y("reject")
    }
})


var c = new Promise((x, y) => {
    if (1) {
        x("delivery partner")
    } else {
        y("reject")
    }
})



var d = new Promise((x, y) => {
    if (1) {
        y("order received!!!!")
    } else {
        x("reject")
    }
})
a.then((res)=>{
    console.log(res)
    return b;
}).then((res)=>{
    console.log(res)
    return c;
}).then((res)=>{
    console.log(res)
    return d;
})
.catch(err=>{
    console.log(err)
})