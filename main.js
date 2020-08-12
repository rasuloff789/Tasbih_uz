 
 let i=0
 //adderButton
 adderButton.onclick=function(){
  
  console.log(i)
 
  screenText.textContent=i+1
 
  i++
  //ifScreenFull
  if(i>99999){

  i=0
  screenText.textContent=i
  }
}
//refresh
refresh.onclick=function refresher(){
i=0
screenText.textContent=i
}
