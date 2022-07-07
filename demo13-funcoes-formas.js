 function minhafuncao1(parametro1){
     return 'aee'
 }

   const minhafuncao2 = function(parametro1){
       return `aeee ${parametro1}`
   }

   const minhafuncao3 = (parametro1) => {
       return `aeee ${parametro1}`
   }

   const minhafuncao4 = parametro1 => `aeee ${parametro1}`

   console.log(minhafuncao2('teste'))

   const obj  = {
      minhafuncao: parametro1 => `aee11e ${parametro1}`
   }

   console.log(obj.minhafuncao('teste'))