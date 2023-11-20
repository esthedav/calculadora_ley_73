function getCurrentDate(){
    let date = new Date()
    let today = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return `${today}/${month}/${year}`
}

function getCurrentAge(birthday){
    const birthdayDate = new Date(birthday)
    const currentDate = new Date()

    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDay() 
    const birthdayMonth = birthdayDate.getMonth()
    const birthdayDay = birthdayDate.getDay()

    if (currentMonth < birthdayMonth || currentMonth == birthdayMonth && currentDay < birthdayDay) {
        age--
    }
    return age
}

function formatDate(date){
    const newDate = date.split("-")
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
}

export { getCurrentDate, getCurrentAge, formatDate }
