console.log(" hola");
//var palabra = document.getElementById("palabra");
function funcion(){
    console.log(historial);
    console.log(palabra.value.length);
    for(i=0;i<palabra.value.length;i++){
        console.log(palabra.value.codePointAt(i))
        
        if((palabra.value.codePointAt(0)>=65&&palabra.value.codePointAt(0)<=90)||(palabra.value.codePointAt(0)>=97&&palabra.value.codePointAt(0)<=122)){
            console.log(palabra.value.charAt(0));
            if(((palabra.value.codePointAt(i)>=65&&palabra.value.codePointAt(i)<=90)||(palabra.value.codePointAt(i)>=97&&palabra.value.codePointAt(i)<=122)||(palabra.value.codePointAt(i)>=48&&palabra.value.codePointAt(i)<=57))){
            
                reconocedor.innerHTML = "Identificador";
                if((i+1)==palabra.value.length)
                historial.innerHTML = historial.innerHTML + "<li class=\"list-group-item\">"+palabra.value+" - "+"Identificador"+"</li>";
            }else{
                reconocedor.innerHTML =  "<p style=\"color:#FF0000\">"+"ERROR"+"</p>";
                break;
            }
        }else if(palabra.value.codePointAt(0)>=48&&palabra.value.codePointAt(0)<=57){
            if(palabra.value.codePointAt(i)>=48&&palabra.value.codePointAt(i)<=57){
            reconocedor.innerHTML = "Numero";
            if((i+1)==palabra.value.length)
            historial.innerHTML = historial.innerHTML + "<li class=\"list-group-item\">"+palabra.value+" - "+"Numero"+"</li>";
            }else{
                reconocedor.innerHTML = "<p style=\"color:#FF0000\">"+"ERROR"+"</p>";
                break;
            }
        }else{
            if(((palabra.value.codePointAt(i)<65||palabra.value.codePointAt(i)>90)&&(palabra.value.codePointAt(i)<97||palabra.value.codePointAt(i)>122)&&(palabra.value.codePointAt(i)<48||palabra.value.codePointAt(i)>57))){
            reconocedor.innerHTML = "Simbolo";
            if((i+1)==palabra.value.length)
            historial.innerHTML = historial.innerHTML + "<li class=\"list-group-item\">"+palabra.value+" - "+"Simbolo"+"</li>";
            }else{
                reconocedor.innerHTML = "<p style=\"color:#FF0000\">"+"ERROR"+"</p>";
                break;
            }
        }
    }
    
	
}