
var clock = setInterval(clocktiming, 1000);
function clocktiming(){
    var d = new Date();
    var day = d.getUTCDate();
    var month = d.getUTCMonth()+1;
    var year = d.getUTCFullYear();
    var time = d.toLocaleTimeString();
    document.getElementById('time').innerHTML = time ;
    document.getElementById('day').innerHTML = day+"-"+month+"-"+year ;
}

function fn(){
    var lengthofphone = document.getElementById('numberbox').value;
    if(lengthofphone.length <= 9 || lengthofphone.length >= 11){
      document.getElementById('numberalert').innerHTML = " * Enter 10 digits !";
      document.getElementById('numberalert').setAttribute("style","color: aqua; font-weight: bold; font-size:17px;");
      document.getElementById('submitbutton').disabled = true;
      document.getElementById('submitbutton').setAttribute("style"," opacity: .4;cursor:not-allowed;");
    }
    else{
        document.getElementById('numberalert').innerHTML = "";
 
        document.getElementById('submitbutton').disabled = false;
        document.getElementById('submitbutton').setAttribute("style"," opacity: 1;cursor:pointer;");
    }

}


function disablesubmit(){
    setTimeout( function(){document.getElementById('submitbutton').disabled= true; document.getElementById('submitbutton').setAttribute("style"," opacity:.5;cursor:pointer;");}, 2000);
    
}
