function addNewWEField(){
    let div=document.createElement("div");
    div.classList.add("mt-3")
    let label=document.createElement("label");
    label.innerHTML="Work Experience "+(++we);
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-3");
    newNode.classList.add("weField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeHolder","Enter here")

    div.appendChild(label);
    div.appendChild(newNode);

    let weAddButtonOb=document.getElementById("weAddButton");
    let weOb=document.getElementById("we");
    weOb.insertBefore(div,weAddButtonOb);
} 
let eq=1;
let we=1;
function addNewEQField(){
    let div=document.createElement("div");
    div.classList.add("mt-3")
    let label=document.createElement("label");
    label.innerHTML="Academic Qualification "+(++eq);
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeHolder","Enter here");
    div.appendChild(label);
    div.appendChild(newNode);

    let eqAddButtonOb=document.getElementById("eqAddButton");
    let eqOb=document.getElementById("eq");
    eqOb.insertBefore(div,eqAddButtonOb);
}

//generating cv
function generateCV() {
    //name
   let nameField=document.getElementById("nameField").value;
   if(nameField==""){
    let v=document.getElementById("nval");
    v.innerHTML="data should be entered";
    v.style.color="red";
   }else{
    let v=document.getElementById("nval");
    v.innerHTML="good";
    v.style.color="green";
   }
   let nameT1=document.getElementById("nameT1");
   nameT1.innerHTML=nameField;
   document.getElementById("nameT2").innerHTML=nameField;
   //contact
   document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
   // address
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

   //links
   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
   document.getElementById("linkedT").innerHTML=document.getElementById("linkedinField").value;
   document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;

   //objective
   document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

   //we
  let wes=document.getElementsByClassName("weField");
  let Str="";
  for (const e of wes) {
    Str=Str+`<li> ${e.value} </li>`;
  } 
   document.getElementById("weT").innerHTML=Str;

   //eq
   let eqs=document.getElementsByClassName("eqField");
   let str="";
   for(let e of eqs){
    str+=`<li> ${e.value} </li>`;
   }
   document.getElementById("eqT").innerHTML=str;

   //code for set image
   let file=document.getElementById("imageField").files[0];
   let st=file["name"];
   let st1=file["type"];
   if(st.endsWith(".png")){
        let reader=new FileReader();
        reader.readAsDataURL(file);
        //set the image to template
        let img=document.getElementById("imgT");
        reader.onloadend=function () {
            img.setAttribute("src",reader.result);
        };
        document.getElementById("cv-form").style.display="none";
        document.getElementById("cv-template").style.display="block";
   }else{
        alert("that file should be png format");
   
    
   }
   
   

   
}

function printCV(){
    window.print();
    
    
}
