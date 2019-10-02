var arr = [3 , 6, 2, 56, 32, 5, 89, 32,99,3];
var largest=arr[0]

var i=0;
while(i<=(arr.length)){
    if (arr[i]>largest) {
        var largest=arr[i];
    }
    console.log(largest);
    i++
}
 

for (i=0; i<=(arr.length);i++){


    if (arr[i]>largest) {
        var largest=arr[i];
    }
}

console.log(largest);


var arr2 = [3 , 6, 2, 56, 32, 5, 89, 32,99,3];

var minimun=arr2[0];
for (i=0; i<=(arr2.length);i++){
    
    if (arr2[i]<minimun) {
        var minimun=arr2[i];
    }
}
console.log(minimun);