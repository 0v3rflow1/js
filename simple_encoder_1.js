i=0;
str=prompt("Your Javascript Here")
str_c='eval(String.fromCharCode(';
j=0;
while(j!=str.length){
  chr=eval('0x'+(str[j].charCodeAt()).toString(16));
  if(j<str.length-1){
    str_c+=chr+',';
  }
  else{
    str_c+=chr;
  } 
  j++;
}
str_c+='));'
eval(str_c);
