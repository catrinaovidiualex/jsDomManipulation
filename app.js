let btnSH=document.querySelector(".btnShowHide");
let container=document.querySelector(".container");

let descriere=document.querySelector(".description");

let changeDesc=document.querySelector(".changeDescription");

let lista=document.querySelector(".testlista");
let btnAdaugare=document.querySelector(".btnAdd");

let newitem=document.querySelector(".newitemclass");

let btnRemoveItem=document.querySelector(".btnDelete");

let flag=1;

btnSH.addEventListener("click",()=>{
    
   
    if(flag==0){
      
         container.style.display="none";
         flag=1;
    }else{
        container.style.display="block";
        flag=0;
    }
   


});

let btnCH=document.querySelector(".btnChange");

btnCH.addEventListener("click",()=>{
    descriere.textContent=changeDesc.value;
});

btnAdaugare.addEventListener("click",()=>{
    let elem=document.createElement("li");

    elem.textContent=newitem.value;
    lista.append(elem);

    newitem.value="";
    

})

btnRemoveItem.addEventListener("click",()=>{
      
    lista.removeChild(lista.lastChild);
})




 





