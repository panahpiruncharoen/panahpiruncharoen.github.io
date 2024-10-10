let number = Math.floor(Math.random() * 10) + 1
$("#Submit").click(() => {
    const  guess = $("input").val()
    if (guess > 10 || guess < 1) {
        alert("the nummber should be between 1 and 10")
    } else {
        alert("correct")
        if (guess == number) {
        } else {
            alert("Incorrect the number is: " + number)
        }   
        number = Math.floor(Math.random() * 10) + 1
    }
}) 