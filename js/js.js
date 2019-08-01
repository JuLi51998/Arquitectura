function calcular(){
    var valoringresado = document.getElementById('valor').value;
    var sumaP=0;
    for (let index = 1; index <= valoringresado; index++){
        var suma=0;

        for (let indexa = 1; indexa <= index; indexa++) {
            suma =  1 + suma;     
        }
        sumaP = suma + sumaP;
    }
    document.getElementById("res").innerHTML = sumaP;
}
