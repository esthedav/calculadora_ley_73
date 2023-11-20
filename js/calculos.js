function getMontoCuantiaBasica(spdValue, factorCuantia){
    const monto = spdValue * 365 * factorCuantia * 1.11
    return Number(monto.toFixed(2))
}

function getIncrementosAnuales(semanasExcedentes){
    const incrementos = Math.floor(semanasExcedentes / 52)
    const decimales = (semanasExcedentes / 52) % 1
    let redondeo = 0

    if (decimales > 0.5) {
        redondeo = 1
    } else if (decimales > 0.25){
        redondeo = 0.5
    }
    
    return incrementos + redondeo
}

function getMontoIncrementosAnuales(spdValue, incrementosAdicionales, incrementosAnuales){
    const monto = spdValue * 365 * incrementosAdicionales * incrementosAnuales * 1.11
    return Number(monto.toFixed(2))
}

function getMontoByAge(montoCuantiaBasica, montoIncrementosAnuales, ageFactorValue){
    const monto = (montoCuantiaBasica + montoIncrementosAnuales) * ageFactorValue
    return Number(monto.toFixed(2))
}

function getMontoMaximo(spdValue){
    const monto = spdValue * 365 * 1.11
    return Number(monto.toFixed(2))
}

function getMontoAsigFamAyudAsis(asigFamAyudAsis, montoByAge){
    const monto = asigFamAyudAsis * montoByAge
    return Number(monto.toFixed(2))
}

function getPensionMensual(montoAsigFamAyudAsis){
    const monto = montoAsigFamAyudAsis / 12
    return Number(monto.toFixed(2))
}


export { 
    getMontoCuantiaBasica,
    getIncrementosAnuales,
    getMontoIncrementosAnuales,
    getMontoByAge,
    getMontoMaximo,
    getMontoAsigFamAyudAsis,
    getPensionMensual,
}
