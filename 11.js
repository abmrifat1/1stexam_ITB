jsFunction=(v1,v2,operation)=>{
    value=operation(v1,v2);
    return value
}
add=(x,y)=>{
    result=x+y;
    return result;
}

console.log(jsFunction(2,3,add))