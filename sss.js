
//password generate 
function kena(){
    
    let sum="abedefghigklomnpqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890!@#$%^"
     a=sum.charAt(Math.floor(Math.random()*sum.length))
     b=sum.charAt(Math.floor(Math.random()*sum.length))
     c=sum.charAt(Math.floor(Math.random()*sum.length))
     d=sum.charAt(Math.floor(Math.random()*sum.length))
     e=sum.charAt(Math.floor(Math.random()*sum.length))
     f=sum.charAt(Math.floor(Math.random()*sum.length))
     g=sum.charAt(Math.floor(Math.random()*sum.length))
     h=sum.charAt(Math.floor(Math.random()*sum.length))
     let keneriyan=a+b+c+d+e+f+g+h;
     document.getElementById("gg").innerHTML = keneriyan;
     
}
