/* let autos = [
    {
        marca : "Ford",
        modelo : "Fiesta",
        precio : 150000,
        km : 200,
        color : "Azul",
        cuotas : 12,
        anio : 2019,
        patente : "APL123",
        vendido : false
    },
    {
        marca : "Toyota",
        modelo : "Corolla",
        precio : 100000,
        km : 0,
        color : "Blanco",
        cuotas : 14,
        anio : 2019,
        patente : "JJK116",
        vendido : false,
    }
];

module.exports = autos; */

const autos = require("./autos");

const concesionaria = {
   autos : autos,
   buscarAuto : function(patenteDeseada){
	   let buscar = null;
	   for (let i=0;i<=autos.length-1;i++){
		   if(autos[i].patente==patenteDeseada){
			   buscar = autos[i];
		   } 
	   }
	   return buscar;
   },
   venderAuto : function(patenteDeseada){
		let estadoAuto = this.buscarAuto(patenteDeseada);
		if(estadoAuto.vendido == false){
			estadoAuto.vendido = true;
			autos.vendido = true
		} 
		return estadoAuto;
   },
	autosParaLaVenta : function(){ 
		let disponibles = autos.filter(function(auto){
			return auto.vendido == false;
			
		})
		return disponibles
   },
   autosNuevos : function(){
	   let nuevos = this.autosParaLaVenta().filter(function(km){
		   return km.km < 100;
	   })
	   return nuevos;
   },
   listaDeVentas : function(){
	   let listaPreciosDeVendidos = [];
	   for(let i=0;i<=autos.length-1;i++){
		   if(this.autos[i].vendido == true){
			   listaPreciosDeVendidos.push(autos[i].precio);
		   } 
	   }
	   return listaPreciosDeVendidos;
   },
   totalDeVentas : function(){
	   let totalesDeLasVentas = this.listaDeVentas();
	   if (totalesDeLasVentas.length == 0){
		   return 0;
	   }
	   let sumaTotal = totalesDeLasVentas.reduce(function(suma,precioDeAuto){
		   return suma + precioDeAuto;
	   })
	   return sumaTotal;
   },
   puedeComprar : function(car,persona){
	   let precioCarro = car.precio;
	   let cuotasCarro = car.cuotas;
	   let cuotasPersona = persona.capacidadDePagoEnCuotas;
	   let totalDePersona = persona.capacidadDePagoTotal;
	   return (precioCarro <= totalDePersona) && (precioCarro <= cuotasCarro*cuotasPersona);
   },
   autosQuePuedeComprar : function(persona){
	   let listaDeCarros = this.autosParaLaVenta().filter(carro => this.puedeComprar(carro,persona))
	   return listaDeCarros;
   }
};