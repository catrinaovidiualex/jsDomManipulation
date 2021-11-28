let btnSH=document.querySelector(".btnShowHide");
let container=document.querySelector(".container");

let descriere=document.querySelector(".description");

let changeDesc=document.querySelector(".changeDescription");

let lista=document.querySelector(".testlista");
let btnAdaugare=document.querySelector(".btnAdd");

let newitem=document.querySelector(".newitemclass");

let btnRemoveItem=document.querySelector(".btnDelete");
let btnCH=document.querySelector(".btnChange");



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


btnCH.addEventListener("click",()=>{
    descriere.textContent=changeDesc.value;
});

btnAdaugare.addEventListener("click",()=>{
    let elem=document.createElement("li");
    
    elem.textContent=newitem.value;

    attachbtn(elem);

    lista.append(elem);

    
    newitem.value="";
    

})



function attachbtn(li){

    li.classList.add("purple");
    let spanitem1=document.createElement('span');
    spanitem1.classList.add('up');
    spanitem1.classList.add('btns');
    spanitem1.textContent="Up";
    li.appendChild(spanitem1);


    li.classList.add("purple");
    let spanitem2=document.createElement('span');
    spanitem2.classList.add('dw');
    spanitem2.classList.add('btns');
    spanitem2.textContent="Down";
    li.appendChild(spanitem2);


    li.classList.add("purple");
    let spanitem3=document.createElement('span');
    spanitem3.classList.add('dlt');
    spanitem3.classList.add('btns');
    spanitem3.textContent="Delete";
    li.appendChild(spanitem3);


}




 





