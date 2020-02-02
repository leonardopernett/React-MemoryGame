import shuffle from 'lodash.shuffle' //modulo para revolver las cartas 
import fontAwesomeClases  from'./fontAwesomeClases'
const NUMERO_CARTAS = 20;

export default () => {
   const fontawesomeClases = fontAwesomeClases();
   let cartas = [];

   while(cartas.length < NUMERO_CARTAS){
       const index = Math.floor(Math.random() *  fontawesomeClases.length);
       const carta = {
           icono: fontawesomeClases.splice(index, 1)[0],
           adivinar:false
       }

       cartas.push(carta);
       cartas.push({...carta})
   }
   return  shuffle(cartas);
}