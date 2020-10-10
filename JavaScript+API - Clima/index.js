



function Leer() {
    const ciudad = document.getElementById("input").value;
    const key='9ebc257ba76951cd62f1e472b24f15e5';
    buscar1(ciudad,key);
}



function buscar1(ciudad,key){
    const api_url=`http://api.openweathermap.org/data/2.5/forecast/?q=${ciudad}&cnt=7&units=metric&appid=${key}`

    fetch(api_url)
        .then(data => {return data.json()})
        .then(resultado=>{
            console.log(resultado);
            console.log(resultado.city.name);
            console.log(resultado.list[0].main.temp) 
            console.log(resultado.list[0].main.feels_like) 

            var nombreCiudad = resultado.city.name;
            var tempActual = resultado.list[0].main.temp;
            var sensacionTer = resultado.list[0].main.feels_like;
            
            document.getElementById('ciddNom').textContent = nomCiudad;  //ciudad que se despliega
            document.getElementById('actTemp').textContent = tActual; //Temperatura actual centigrados
            document.getElementById('senTe').textContent = senTer; //sensacion terminca

            document.getElementById('txtCiudad').innerHTML = "Tiempo en la ciudad ";
      });
}

