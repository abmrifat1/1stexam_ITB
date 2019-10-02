const str="hello samim";

    stringChange=(sentence,position)=>{
        sen=sentence.split("");
        sen[position]="";
        sentence=sen.join("")
        return sentence;
    }
  

   console.log(stringChange(str,0))