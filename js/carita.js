
// Utilizo la funcion new Date() para obtener la fecha actual y el getDay () para el dia de la semana //
	const ahora=new Date().getDay();
   
// Utilizo una condicional donde comparo el dia de la fecha actual y el numero de la semana de cada dia //
   if (ahora ==7){
   // Aqui en todos los casos hago el llamado de la ruta de la imagen y la almaceno en la variable imagen// 
   	imagen="imagenes/carita0.jpeg";


   }


   else if (ahora ==1){
 
   	imagen="imagenes/carita1.jpeg";

   }

  else if (ahora ==2){
 
   	imagen="imagenes/carita2.jpeg";

   }


  else  if (ahora ==3){
 
   	imagen="imagenes/carita3.jpeg";

   }

  else  if (ahora ==4){
 
   	imagen="imagenes/carita4.jpeg";

   }

  else if (ahora ==5){
 
   	imagen="imagenes/carita5.jpeg";

   }

   else if (ahora ==6){
 
   	imagen="./imagenes/carita6.jpeg";

   }

// Aqui hago la conexion con el HTML y el elemento img para insertar la ruta de la imgagen //
   document.images["carita"].src=imagen;

