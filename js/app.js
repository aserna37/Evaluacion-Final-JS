 


var Calculadora={

    

    init:function(){
        document.getElementById('igual').onmousedown=this.reducirTamano;
        document.getElementById('dividido').onmousedown=this.reducirTamano;
        document.getElementById('por').onmousedown=this.reducirTamano;
        document.getElementById('menos').onmousedown=this.reducirTamano;
        document.getElementById('mas').onmousedown=this.reducirTamano;
        document.getElementById('sign').onmousedown=this.reducirTamano;
        document.getElementById('punto').onmousedown=this.reducirTamano;
        document.getElementById('on').onmousedown=this.reducirTamano;
        document.getElementById('0').onmousedown=this.reducirTamano;
        document.getElementById('1').onmousedown=this.reducirTamano;
        document.getElementById('2').onmousedown=this.reducirTamano;
        document.getElementById('3').onmousedown=this.reducirTamano;
        document.getElementById('4').onmousedown=this.reducirTamano;
        document.getElementById('5').onmousedown=this.reducirTamano;
        document.getElementById('6').onmousedown=this.reducirTamano;
        document.getElementById('7').onmousedown=this.reducirTamano;
        document.getElementById('8').onmousedown=this.reducirTamano;
        document.getElementById('9').onmousedown=this.reducirTamano;
        document.getElementById('sign').onclick=this.negativo;
        document.getElementById('punto').onclick=this.asignarPunto;
        document.getElementById('on').onclick=this.limpiarDisplay;
        document.getElementById('0').onclick=this.asignarValorCero;
        document.getElementById('1').onclick=this.asignarValorUno;
        document.getElementById('2').onclick=this.asignarValorDos;
        document.getElementById('3').onclick=this.asignarValorTres;
        document.getElementById('4').onclick=this.asignarValorCuatro;
        document.getElementById('5').onclick=this.asignarValorCinco;
        document.getElementById('6').onclick=this.asignarValorSeis;
        document.getElementById('7').onclick=this.asignarValorSiete;
        document.getElementById('8').onclick=this.asignarValorOcho;
        document.getElementById('9').onclick=this.asignarValorNueve;
        document.getElementById('mas').onclick=this.asignarSuma;
        document.getElementById('por').onclick=this.asignarMultiplicacion;
        document.getElementById('menos').onclick=this.asignarMenos;
        document.getElementById('dividido').onclick=this.asignarDivision;
        document.getElementById('igual').onclick=this.Igual;
        
    

},

   limpiarDisplay:function(){
    x="0"; 
    coma=0;
    ni=0 
    op="no" 
    display.innerHTML=0;
    this.setAttribute("style","transform:scale(1,1)")
   }, 

   reducirTamano: function(){
    this.setAttribute("style","transform:scale(0.90,0.90)")

   }, 

   asignarPunto: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('.');
  
},

  
asignarValorCero: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('0');
  
},
 asignarValorUno: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('1');
  
},
asignarValorDos: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('2');
  
},
asignarValorTres: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('3');
  
},
asignarValorCuatro: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('4');
  
},
asignarValorCinco: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('5');
  
},asignarValorSeis: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('6');
  
},
asignarValorSiete: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('7');
  
},
asignarValorOcho: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('8');
  
},
asignarValorNueve: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.numeros('9');
  
},
asignarSuma: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.Operacion('+');
},
asignarMenos: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.Operacion('-');
},
asignarMultiplicacion: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.Operacion('*');
},
asignarDivision: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.Operacion('/');
},
Igual: function(){
    this.setAttribute("style","transform:scale(1,1)")
    Calculadora.igualar();
},

 numeros: function(xx) { 
          var cadena = display.innerHTML.toString()
          if (x=="0" || xi==1  ) {   
            display.innerHTML=xx; 
            x=xx; 
            if (xx==".") { 
               display.innerHTML="0."; 
               x=xx; 
               coma=1; 
               }
           }
           else { 
               if (xx=="." && coma==0) { 
                   display.innerHTML+=xx;
                   x+=xx;
                   coma=1; 
               }
               
               else if (xx=="." && coma==1) {} 
               
               else {
                if(cadena.length < 8){
                   display.innerHTML+=xx;
                   x+=xx
               }
           }
            }
            xi=0 
         },

        negativo: function() {
        this.setAttribute("style","transform:scale(1,1)") 
         nx=Number(x); 
         nx=-nx; 
         x=String(nx); 
         display.innerHTML=x;
         },

         Operacion: function(s) {
          
         ni=x 
         op=s; 
         xi=1; 
         },

         igualar:function() {
         
         if (op=="no") { 
            display.innerHTML=x;   
            }
         else { 
            sl=ni+op+x; 
            sol=eval(sl)
            display.innerHTML=sol 
            x=sol; 
            op="no"; 
            xi=1;
            var cadena = display.innerHTML.toString()
            if(cadena.length > 8){
            display.innerHTML=cadena.substr(0,8);
            x=sol; 
            op="no"; 
            xi=1;
            } 
            
        }

}
}
x="0"; 
xi=1; 
coma=0; 
ni=0; 
op="no"; 
Calculadora.init();

