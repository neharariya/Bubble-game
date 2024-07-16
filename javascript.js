



var hitrn =0;
var timer = 60;



function makebubble() {

var sum="";




for(var i =1; i<=242; i++)
    {
        var num = Math.floor(Math.random()*10)
        sum += `<div class="bubble">${num}</div>`;
    }

     var temp = document.querySelector("#btmpnl");
     temp.innerHTML = sum};

    
    //  var num = document.querySelector(".num");
    //  console.log('//////////////////////////', typeof(Number(num.innerText)));


    // if(Number(num.innerText)===0)
    //     {
    //         num.style.backgroundColor = "red";
    //     }


function runTimer(){

  var temp =  setInterval(function(){

    // temp storing the id of every Count, the setinterval function return the id of count

    
        if(timer>0)
            {
                timer--;
                document.querySelector("#timerval").innerText = timer;
            }
    
            else{
    
                clearInterval(temp);
                document.querySelector("#hitval").innerHTML = " ";
               
                document.querySelector("#btmpnl").innerHTML = `<h1>GAME OVER</h1> 
`;


                document.querySelector("h1").style.color = " rgb(39, 95, 39)";
                
                


            



    
            }

            


           


    },1000);

       
        
};

function getnewhit(){

    hitrn = Math.floor(Math.random()*10);

    document.querySelector("#hitval").innerText = hitrn;


}

var score= 0;

function increasescore(){

    score += 10;

    document.querySelector("#scoreval").innerText = score;
    
   

    


}



document.querySelector("#btmpnl").addEventListener("click",function(details){

      var numberclicked = Number(details.target.innerText);

        if(numberclicked === hitrn)
         {
            increasescore();
            getnewhit();
            makebubble();
         }
});





getnewhit();
runTimer();
makebubble();