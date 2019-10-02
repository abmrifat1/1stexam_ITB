revNumber=(number)=>{
     number =String(number);
     return   number.split("").reverse().join("");
    
}
console.log(revNumber(223344))