var sentence="my name is khorshedfffffffffffffffffffffee alam mazumder";
function findLargestLength(str){
  var str=sentence.split(' ');
  var maxlenght=0;
  for(var i=0;i<=(str.length)-1;i++){
    if(str[i].length>=maxlenght){
      maxlenght=str[i].length;
      var a= str[i]
    }
  }
  return a;
}

console.log(findLargestLength(sentence))