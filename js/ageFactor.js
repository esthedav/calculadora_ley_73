function ageFactor(desiredAge){
    let factor = 0
    switch (desiredAge){
        case 60:
            return factor = 0.75
        case 61:
            return factor = 0.80
        case 62:
            return factor = 0.85
        case 63:
            return factor = 0.90
        case 64:
            return factor = 0.95
        case 65:
            return factor = 1.00
        default:
            return factor = "La edad deseada de retiro es INVALIDA"
    }
}

export { ageFactor }
