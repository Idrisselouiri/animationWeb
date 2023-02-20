let stars = document.querySelector(".stars");
let moon2 = document.querySelector(".moon2");
let mountains3 = document.querySelector(".mountains3");
let mountains4 = document.querySelector(".mountains4");
let river5 = document.querySelector(".river5");
let boat6 = document.querySelector(".boat6");
let nouvil = document.querySelector(".nouvil");

window.onscroll = function(){
    let value = scrollY ;
    stars.style.left = value + "px" ;
    moon2.style.top = value * 3 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5  + "px";
    river5.style.top = value  + "px";
    boat6.style.top = value  + "px" ;
    boat6.style.left = value  + "px" ;
    nouvil.style.fontSize = value + "px" ;
    if(scrollY >= 69){
        nouvil.style.position = "fixed" ;
        nouvil.style.fontSize = 67 + "px" ;
        if(scrollY >= 429){
            nouvil.style.display = "none" ;
        }else{
            nouvil.style.display = "block";
        }
        if(scrollY >= 176){
            document.querySelector(".main").style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector(".main").style.background = 'linear-gradient(to top, #200016,transparent)';
        }
    }
    
}