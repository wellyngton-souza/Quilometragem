const enviar = () =>{
    var km = document.getElementById("km").value;
    var litro = document.getElementById("litro").value;
    var veiculo = document.getElementById("veiculo").value;

    if(km != "" && litro != "" && veiculo != ""){
        var consumo = km / litro;
        var economia;
        var colorconsumo;

        if(consumo >= 20){
            economia = "Extremamente Economico";
            colorconsumo = "green";
        } else if(consumo < 20 && consumo >= 12){
            economia = "Economico";
            colorconsumo = "#1fff1f";
        } else if(consumo < 12 && consumo >=8){
            economia = "Normal";
            colorconsumo = "yellow";
        } else if(consumo <=8){
            economia = "Alto Consumo";
            colorconsumo = "red";
        }

        var consumoTotal = `
        <td style="background-color:${colorconsumo};">${consumo.toFixed(2)}KM/L</td>
        <td style="background-color:${colorconsumo};">${economia}</td>
        <td style="background-color:${colorconsumo};">${veiculo}</td>`;

        document.querySelector("tr").insertAdjacentHTML("afterend", consumoTotal);
        document.getElementById("km").value = "";
        document.getElementById("litro").value = "";
        document.getElementById("veiculo").value = "";
        document.querySelector("span").textContent = "";
        document.getElementById("km").focus();
    } else{
        document.querySelector("span").textContent = "Preencha os campos corretamente";
        switch(""){
            case document.getElementById("km").value:
                document.getElementById("km").focus();
                break;

            case document.getElementById("litro").value:
                document.getElementById("litro").focus();
                break;

            case document.getElementById("veiculo").value:
                document.getElementById("veiculo").focus();
                break;
        }
    }
}