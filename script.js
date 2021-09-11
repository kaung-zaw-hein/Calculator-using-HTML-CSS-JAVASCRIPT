const power= document.querySelector(".power");
const display= document.querySelector(".display");
const block = document.querySelector(".block");
const a = document.querySelector(".a");
clickbtn = (value)=>{
    console.log(value);
    let current =display.innerHTML;
    if(display.innerHTML =="0"){
        if(value!= "ON/OFF" && value!="DEL"&& value!="/"&& value!="*"&& value!="%"){ 
            display.innerHTML ="";
            display.innerHTML += value;
          }
        }
    else{
        if(value == "DEL" ){
            display.innerText = current.slice(0,-1);
            if(display.innerHTML.length <= 0){
              display.innerHTML = "0";
            }
        }
        if(value!="ON/OFF" && value!="DEL" && value!="="){
            display.innerHTML += value;
        }
        if(value =="="){
            display.innerHTML = eval(display.innerHTML);
          }
        if(value == "ON/OFF"){
            display.innerHTML = "0";
          }
    }    
    }
blockbtn=()=>{
    block.classList.add("blk");
} 
unblk=()=>{
    block.classList.remove("blk");
} 
power.addEventListener("click", ()=>{
    power.classList.toggle("On");
    block.classList.remove("blk");
    display.classList.toggle("dis");
})
