//функция генерации случайных чисел
function getRandomInRange(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//фнкция, создюща лист из 6 рандомных чисел от 1 до 45
function getArrayOfSixRandomNumbers() 
{
    var arrayList = []

    for (var i = 1; i <= 6; i++) 
    {
        var listItem = getRandomInRange(1,45)
        arrayList.push(listItem);
    }

    return arrayList
}

//функция, которая заполняет div-ы, исходя из листа случайных чисел
function fillCirclesWithRandomNumber() {
    var newArrayList = getArrayOfSixRandomNumbers()

    var listOfCircles = document.getElementsByClassName("icon_circle")

    for (i = 0; i < newArrayList.length; i++) 
        {
            listOfCircles[i].innerHTML = newArrayList[i]
            listOfCircles[i].style.color = "#d162c0"
            listOfCircles[i].style.fontSize = "30px"
            listOfCircles[i].style.fontWeight = "600"
        }
}

//функция, очищающая все div-ы
function clearCirclesWithRandomNumber() {
    var listOfCircles = document.getElementsByClassName("icon_circle")

    for (i = 0; i < listOfCircles.length; i++) 
        {
            listOfCircles[i].innerHTML = ""
        }
}

document.getElementById('gen_button').addEventListener("click", fillCirclesWithRandomNumber)
document.getElementById('clear_button').addEventListener("click", clearCirclesWithRandomNumber)


