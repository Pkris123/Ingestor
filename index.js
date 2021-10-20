var flag=0;

function openNav() {
  flag=1;
  //document.getElementById("mySidebar").style.width = "300px";
  
  $("#main").addClass("blurredElement");

  document.getElementById("mySidebar").style.left = "0px";
  document.getElementById("side-bor").style.left = "295px";
}

function closeNav() {
  flag=0;
  document.getElementById("mySidebar").style.left = "-300px";
  document.getElementById("side-bor").style.left = "-5px";
  $("#main").removeClass("blurredElement");
}
function navOpr()
{
    if(flag===0)
    {
      openNav();
    }
    else if(flag===1)
    {
      closeNav();
    }
}
document.querySelector("#main").addEventListener("click",function(){
  if(flag===1)
  {
    closeNav();
  }
},true);

