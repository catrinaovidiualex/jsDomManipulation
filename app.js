let btnSH=document.querySelector(".btnShowHide")
let container=document.querySelector(".container");


let flag=0;

btnSH=addEventListener("click",()=>{

   
    if(flag==0){
      
         container.style.display="none";
         flag=1;
    }else{
        container.style.display="block";
        flag=0;
    }
   


})

let btnCH=document.querySelector(".btnChange")





