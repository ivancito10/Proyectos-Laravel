var app = new Vue({
    el:'#app',
    data: {
        lista : [
            {nombre:"juan carlos",promedio:"10", estado:"false"}
         ],
        nombre: '',
        promedio: ''
    },
    methods: {
        agregarNota: function(){
            estadoA=false;
            if(this.promedio<=12){
                estadoA=true;
            }
            if(this.nombre!="" && this.promedio!=""){
                this.lista.push({nombre:this.nombre, promedio:this.promedio, estado:this.estadoA});
                this.nombre="";
                this.promedio="";
            }else{
                alert("Ingrese el nombre y promedo del estudiante");
            }
        }
    }
})