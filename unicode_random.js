var unicode_random=(function(window){
  i=0;
  code="";
  len=prompt("longitud: ");
  (len=="")?500:parseInt(len)
  while(i<len){
  al=function(n){j=0;str='';while(j<n){str+=Math.floor((Math.random()*15)).toString(16).replace(/\\x/g,"");j++;}return str;}(4);
  code+=(unescape("%u"+al));
  i++;
  }
  document.all[0].innerHTML=""
  document.all[0].innerHTML="<div style='margin:0 auto;padding:50px;width:70%;border:1px solid black;height:auto;word-wrap:break-word'>"+code+"</div>"
})(window);
