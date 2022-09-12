const autos=require("./autos");
let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
     let buscarAuto = autos.find(autos=>patente===autos.patente)
     return buscarAuto !== undefined ? buscarAuto: null;
},

   venderAuto: function(patente){
      this.buscarAuto(patente).vendido = true;
   
},

   autosParaLaVenta: function(){
    const vendidos = this.autos.filter(autos => autos.vendido === false);
    return vendidos;
     
   },

   
   autosNuevos: function(){
      ventaAutos = this.autosParaLaVenta();
     const ventaAutosNuevos = ventaAutos.filter(autos => (autos.km< 100)&& (autos.km >=0));
     return ventaAutosNuevos; 
     },

   listaDeVentas: function(){
     const vendidos = this.autos.filter(autos => autos.vendido==true);
    const precios = vendidos.map(function(autos){
      return autos.precio
      
    });

    return precios;
  },

   totalDeVentas:function(){
      const vendidos = this.autos.filter(autos => autos.vendido==true);
const precios = vendidos.map(function(autos){
      return autos.precio
    });
    const initialValue = 0;
      const totalValor = precios.reduce(function(acum,precio){ 
       return initialValue,acum + precio
 },initialValue);
return totalValor;
   
   },

   puedeComprar: function(auto, persona){
if((auto.precio<=persona.capacidadDePagoTotal)&&(persona.capacidadDePagoEnCuotas>=(auto.precio/auto.cuotas))){
   return true;
} else {
   return false;}
},
   autosQuePuedeComprar: function(persona){
    const aLaVenta = this.autosParaLaVenta();
    const autosComprables = [];
    for(let i=0;i<aLaVenta.length;i++){
       comprables =this.puedeComprar(aLaVenta[i],persona);
       if(comprables== true){
          autosComprables.push(i);
       }
    };
    cumplenCondicion =[]
       for(let indice=0;indice<autosComprables.length;indice++){
      cumplenCondicion.push(aLaVenta[autosComprables[indice]]);
       };
    return cumplenCondicion;
   }
}