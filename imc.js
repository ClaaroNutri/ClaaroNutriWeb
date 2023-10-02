

 let button=document.getElementById("imc")
 console.log(button)

 button.addEventListener("click", ()=>{

    let peso=document.getElementById("peso").value
    peso=peso.replace(",", ".")
    let altura=document.getElementById("altura").value
    altura=altura.replace(",", ".")
    if(peso=="" || peso==isNaN || peso < 0 ||  altura=="" || altura ==isNaN || altura < 0){
        alert("Debes ingresar un número válido para peso y altura");
    }

    else{
        let imc=Number(parseFloat(peso))/Number(parseFloat(altura*altura))
        imc=imc.toFixed(2)

        if (imc <18.5) {
            alert(`Su índice de masa corporal es de: ${imc} y su clasificación es Bajo peso`);

        } else if (imc >= 18.5 && imc <= 24.9) {
            alert(`Su índice de masa corporal es de: ${imc} y su clasificación es Normo peso`);

        } else if (imc >= 25 && imc <= 29.9) {
            alert(`Su índice de masa corporal es de: ${imc} y su clasificación es Sobrepeso`);
        }
        else if (imc >= 30 && imc <= 34.9) {
            alert(`Su índice de masa corporal es de: ${imc} y su clasificación es Obesidad grado 1`);
        }
        else if (imc >= 35 && imc <= 39.9) {
            alert(`Su indice de masa corporal es de: ${imc} y su clasificación es Obesidad grado 2`);
        }
        else if (imc >= 40) {
            alert(`Su indice de masa corporal es de: ${imc} y su clasificación es Obesidad mórbida`);
        }
    }
});