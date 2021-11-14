let btn=document.querySelector(".btnShow")
let container=document.querySelector(".container");


let flag=0;

btn=addEventListener("click",()=>{

   
    if(flag==0){
      
         container.style.display="none";
         flag=1;
    }else{
        container.style.display="block";
        flag=0;
    }
   


})




