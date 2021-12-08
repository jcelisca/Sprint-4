const calcularDepreciacionNIIF = (precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar) => {
    if(vidaUtil<=0){
		return 0;
	}else if(numeroPeriodoAconsultar<0){
		return precioInicial;
	}else if(numeroPeriodoAconsultar>vidaUtil){
		return precioFinal;
	}else{
        var precio=(precioFinal-precioInicial)*numeroPeriodoAconsultar/vidaUtil+precioInicial;
	    return precio;
    }
}

async function mostrarProductoMayor(){
    let productosConDepreciacion = [];
    let mayorDepreciacion = [];
	let response = await fetch("https://misiontic2022upb.vercel.app/api/logistics/products");
    let productosAPI = await response.json();
    let indice = 0;
    let max = 0;	

    productosAPI.forEach(e => {
        var precioDepreciado = calcularDepreciacionNIIF(e.precioInicial,e.precioFinal,e.vidaUtil,e.periodo_consultado);

        if(precioDepreciado > max){
            max = precioDepreciado;
            indice = indice +  1;
        }

        productosConDepreciacion.push({
            "precioDepreciado":Number(precioDepreciado),
            "precioInicial":e.precioInicial,
            "precioFinall":e.precioFinal,
            "vidaUtil":e.vidaUtil,
            "periodo_consultado":e.periodo_consultado
        })
    });
    mayorDepreciacion.push(productosConDepreciacion[indice-1]);
    return mayorDepreciacion;
}

mostrarProductoMayor().then(console.log);
//module.exports.mostrarProductoMayor = mostrarProductoMayor;