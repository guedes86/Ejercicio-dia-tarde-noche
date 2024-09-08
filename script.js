function saludo(){
    let hora = parseFloat(document.getElementById('hora').value);

    if (hora<12){
        document.getElementById('saludosalida').textContent = "Buenos dias";
        document.body.style.backgroundColor = '#fffd91';
    }
    else if (hora>=12 && hora<17){
        document.getElementById('saludosalida').textContent = "Buenas tardes";
        document.body.style.backgroundColor = '#ffc17b';
    }
    else if (hora>=17 && hora<=23){
        document.getElementById('saludosalida').textContent = "Buenas noches";
        document.body.style.backgroundColor = '#131c92';
    }
    else {
        alert ("Por favor ingressar un valor entre (0 - 23)");
    }
}