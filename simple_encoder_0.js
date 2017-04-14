i=0;
str=prompt("Your Javascript Here")
str_c='eval("';
j=0;
while(i<512 && j!=str.length){
  a=('"\\'+i.toString()).toString()+'"';
  if(str[j]==eval(a)){
    str_c+=('\\'+i.toString()).toString();
    j++;
    i=0;
  }else{
    i++;
  }
}
str_c+='")';
eval(str_c)
