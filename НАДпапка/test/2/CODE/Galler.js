let offset=0;

const slider_line = document.querySelector('.slider_line');


document.querySelector('.sln').addEventListener('click',function(){
  offset-=215;
  if (offset<-2365){
    offset=0;
  }

  slider_line.style.left=offset+'px';

  if(slider_line==0){
    document.getElementById("xxt").textConten="espeon";
  }
  if(slider_line==-215){
    document.getElementById("xxt").textConten="sneasel";
  }
  if(slider_line==-430){
    document.getElementById("xtt").textConten="hisuian sneasel";
  }

})
document.querySelector('.slp').addEventListener('click',function(){
  offset+=215;

  if (offset>0){
    offset=-2365;
  }
  slider_line.style.left=offset+'px';
})
