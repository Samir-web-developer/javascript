let name = prompt('Введите имя')

if(name[0] === 'A' || name[0] === 'a') {
    console.log('Welcome')
    let age = prompt('Сколько вам лет?')
    if(age >= 20 && age <= 40) {
        alert('Возраст ' + age)
    let money = prompt('Сколько денег у вас при себе?')
        if(money >= 100) {
            alert('Сумма ' + money + '$')
    let busy = prompt('Занятых мест')
            if(busy <= 30){
                alert('Занятых мест ' + busy)
    let howMany = prompt('Сколько людей хотят зайти')
    let have = +busy + +howMany
    let info = have


                if(howMany){
                    alert('Количество клиентов ' + howMany)
                    if(info === have && info <= 30){
                        alert('Добро пожаловать')
                    
                    }else {
                        alert('Close')
                    }
                }else {
                    alert('Мест нет')
                }
            }else {
                alert('Мест нет')
            }
        }else {
            alert('У вас недостаточно средств для нашего ресторана')
        }
    }else{
        alert('Get out')
    }
    
    
    
    
    
}else{
   alert('Get out')
}
