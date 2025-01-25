
let btnClick=document.querySelectorAll(".box");
let rtbtn=document.querySelector("#rtbtn")
let turn0=true;
let el = document.createElement("div");
el.id="result";

let pattern = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]
];


btnClick.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="0";
            turn0=true;
        }   
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for(let val of pattern){
        let patn0=btnClick[val[0]].innerText;
        let patn1=btnClick[val[1]].innerText;
        let patn2=btnClick[val[2]].innerText;
        if(patn0!="" && patn1!="" && patn2!=""){
            if(patn0==patn1 && patn1==patn2){
                
                let bd=document.querySelector("body");
                if(turn0==true){
                    el.innerText="Congratulations!.. 0 Wins";
                    

                }else{
                    el.innerText="Congratulations!.. X Wins";
                }
                bd.append(el);
                el.style.textAlign="Center";
                el.style.fontSize="50px";
                btnClick.forEach((box)=>{
                    box.disabled=true;
                    box.style.backgroundColor="#764550";
                });
            }
        }
    }
}


let rstFunc = ()=>{
    btnClick.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        box.style.backgroundColor="#76453B";
        turn0=true;
        el.innerText="";
    });
}

rtbtn.addEventListener("click", rstFunc);

