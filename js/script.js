// module imports
import { 
    getCurrentDate, 
    getCurrentAge, 
    formatDate,
} from "./fechas.js"
import { ageFactor } from "./ageFactor.js"
import { cuantiaBasica } from "./cuantiaBasica.js"
import { 
    getMontoCuantiaBasica,
    getIncrementosAnuales,
    getMontoIncrementosAnuales,
    getMontoByAge,
    getMontoMaximo,
    getMontoAsigFamAyudAsis,
    getPensionMensual,
} from "./calculos.js"


// Get Action btn
const btnSend = document.getElementById('btnSend')


// Get HTML elements Datos personales
const headerNameValue = document.getElementById('header__name-value')
const headerDateValue = document.getElementById('header__date-value')
const headerBirthdayValue = document.getElementById('header__birthday-value')
const headerAgeValue = document.getElementById('header__age-value')
const headerSPDValue = document.getElementById('header__spd-value')
const headerSemanasCotizadasValue = document.getElementById('header__semanas_cotizadas-value')
const headerSemanasFaltantesValue = document.getElementById('header__semanas_faltantes-value')
const headerSemanasExcedentesValue = document.getElementById('header__semanas_excedentes-value')
const headerDesiredAgeValue = document.getElementById('header__desired-age-value')
const headerAgeFactorValue = document.getElementById('header__age-factor-value')
const headerAsigFamAyudAsisValue = document.getElementById('header__asigFamAyudAsis-value')
const headerFactorCuantia = document.getElementById('header__factor-cuantia-value')
const headerIncrementosAdicionalesValue = document.getElementById('header__incrementos-adicionales-value')


// Get HTML elements Cesantia y Vejez LSS
const cesantiaVejezCuantiaBasicaValue = document.getElementById('cesantia-vejez__cuantia-basica-value')
const cesantiaVejezIncrementosAnualesValue = document.getElementById('cesantia-vejez__incrementos-anuales-value')
const cesantiaVejezMontoIncrementosAnualesValue = document.getElementById('cesantia-vejez__monto-incrementos-anuales-value')
const cesantiaVejezMontoEdadValue = document.getElementById('cesantia-vejez__monto-edad-value')
const cesantiaVejezMontoMaximoValue = document.getElementById('cesantia-vejez__monto-maximo-value')
const cesantiaVejezAsigFamAyudAsisValue = document.getElementById('cesantia-vejez__asigFamAyudAsis-value')
const cesantiaVejezPensionMensualValue = document.getElementById('cesantia-vejez__pension-mensual-value')

// Get PDF elements Datos personales
const pdfNameValue = document.getElementById('pdf__name-value')
const pdfDateValue = document.getElementById('pdf__date-value')
const pdfBirthdayValue = document.getElementById('pdf__birthday-value')
const pdfAgeValue = document.getElementById('pdf__age-value')
const pdfSPDValue = document.getElementById('pdf__spd-value')
const pdfSemanasCotizadasValue = document.getElementById('pdf__semanas_cotizadas-value')
const pdfSemanasFaltantesValue = document.getElementById('pdf__semanas_faltantes-value')
const pdfSemanasExcedentesValue = document.getElementById('pdf__semanas_excedentes-value')
const pdfDesiredAgeValue = document.getElementById('pdf__desired-age-value')
const pdfAgeFactorValue = document.getElementById('pdf__age-factor-value')
const pdfAsigFamAyudAsisValue = document.getElementById('pdf__asigFamAyudAsis-value')
const pdfFactorCuantia = document.getElementById('pdf__factor-cuantia-value')
const pdfIncrementosAdicionalesValue = document.getElementById('pdf__incrementos-adicionales-value')


// Get PDF elements Cesantia y Vejez LSS
const pdfVejezCuantiaBasicaValue = document.getElementById('pdf-vejez__cuantia-basica-value')
const pdfVejezIncrementosAnualesValue = document.getElementById('pdf-vejez__incrementos-anuales-value')
const pdfVejezMontoIncrementosAnualesValue = document.getElementById('pdf-vejez__monto-incrementos-anuales-value')
const pdfVejezMontoEdadValue = document.getElementById('pdf-vejez__monto-edad-value')
const pdfVejezMontoMaximoValue = document.getElementById('pdf-vejez__monto-maximo-value')
const pdfVejezAsigFamAyudAsisValue = document.getElementById('pdf-vejez__asigFamAyudAsis-value')
const pdfVejezPensionMensualValue = document.getElementById('pdf-vejez__pension-mensual-value')



btnSend.addEventListener("click", () => {
    // Get FORM values
    const nameValue = document.getElementById('nameValue').value
    const birthdayValue = document.getElementById('birthdayValue').value
    const spdValue = Number(document.getElementById('spdValue').value)
    const semanasCotizadas = Number(document.getElementById('semanasCotizadas').value)
    const desiredAge = Number(document.getElementById('desiredAge').value)


    // Values for calculating
    const currentAge = getCurrentAge(birthdayValue)
    const semanasFaltantes = (desiredAge - currentAge) * 52
    const semanasExcedentes = semanasCotizadas + semanasFaltantes - 500
    const ageFactorValue = ageFactor(desiredAge)
    const asigFamAyudAsis = 1.15
    const { factorCuantia, incrementosAdicionales } = cuantiaBasica(spdValue)
    const montoCuantiaBasica = getMontoCuantiaBasica(spdValue, factorCuantia)
    const incrementosAnuales = getIncrementosAnuales(semanasExcedentes)
    const montoIncrementosAnuales = getMontoIncrementosAnuales(spdValue, incrementosAdicionales, incrementosAnuales)
    const montoByAge = getMontoByAge(montoCuantiaBasica, montoIncrementosAnuales, ageFactorValue)
    const montoMaximo = getMontoMaximo(spdValue)
    const montoAsigFamAyudAsis = getMontoAsigFamAyudAsis(asigFamAyudAsis, montoByAge)
    const pensionMensual = getPensionMensual(montoAsigFamAyudAsis)



    // Add text to Datos Personales
    headerNameValue.textContent = nameValue
    headerDateValue.textContent = getCurrentDate()
    headerBirthdayValue.textContent = formatDate(birthdayValue)
    headerAgeValue.textContent = currentAge
    headerSPDValue.textContent = spdValue.toLocaleString('es-MX')
    headerSemanasCotizadasValue.textContent = semanasCotizadas.toLocaleString('es-MX')
    headerSemanasFaltantesValue.textContent = semanasFaltantes.toLocaleString('es-MX')
    headerSemanasExcedentesValue.textContent = semanasExcedentes.toLocaleString('es-MX')
    headerDesiredAgeValue.textContent = desiredAge
    headerAgeFactorValue.textContent = ageFactorValue
    headerAsigFamAyudAsisValue.textContent = asigFamAyudAsis
    headerFactorCuantia.textContent = factorCuantia
    headerIncrementosAdicionalesValue.textContent = incrementosAdicionales


    // Add text to Cesantía y vejez LSS 73
    cesantiaVejezCuantiaBasicaValue.textContent = montoCuantiaBasica.toLocaleString('es-MX')
    cesantiaVejezIncrementosAnualesValue.textContent = incrementosAnuales
    cesantiaVejezMontoIncrementosAnualesValue.textContent = montoIncrementosAnuales.toLocaleString('es-MX')
    cesantiaVejezMontoEdadValue.textContent = montoByAge.toLocaleString('es-MX')
    cesantiaVejezMontoMaximoValue.textContent = montoMaximo.toLocaleString('es-MX')
    cesantiaVejezAsigFamAyudAsisValue.textContent = montoAsigFamAyudAsis.toLocaleString('es-MX')
    cesantiaVejezPensionMensualValue.textContent = pensionMensual.toLocaleString('es-MX')

    // Add Text to PDF
    pdfNameValue.textContent = nameValue
    pdfDateValue.textContent = getCurrentDate()
    pdfBirthdayValue.textContent = formatDate(birthdayValue)
    pdfAgeValue.textContent = currentAge
    pdfSPDValue.textContent = spdValue.toLocaleString('es-MX')
    pdfSemanasCotizadasValue.textContent = semanasCotizadas.toLocaleString('es-MX')
    pdfSemanasFaltantesValue.textContent = semanasFaltantes.toLocaleString('es-MX')
    pdfSemanasExcedentesValue.textContent = semanasExcedentes.toLocaleString('es-MX')
    pdfDesiredAgeValue.textContent = desiredAge
    pdfAgeFactorValue.textContent = ageFactorValue
    pdfAsigFamAyudAsisValue.textContent = asigFamAyudAsis
    pdfFactorCuantia.textContent = factorCuantia
    pdfIncrementosAdicionalesValue.textContent = incrementosAdicionales

    // Add text to PDF Cesantía y vejez LSS 73
    pdfVejezCuantiaBasicaValue.textContent = montoCuantiaBasica.toLocaleString('es-MX')
    pdfVejezIncrementosAnualesValue.textContent = incrementosAnuales
    pdfVejezMontoIncrementosAnualesValue.textContent = montoIncrementosAnuales.toLocaleString('es-MX')
    pdfVejezMontoEdadValue.textContent = montoByAge.toLocaleString('es-MX')
    pdfVejezMontoMaximoValue.textContent = montoMaximo.toLocaleString('es-MX')
    pdfVejezAsigFamAyudAsisValue.textContent = montoAsigFamAyudAsis.toLocaleString('es-MX')
    pdfVejezPensionMensualValue.textContent = pensionMensual.toLocaleString('es-MX')

})
