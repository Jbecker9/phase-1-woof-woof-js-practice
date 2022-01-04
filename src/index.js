document.addEventListener("DOMContentLoaded", () => {
dogList()
})

function dogList(){
    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(data => data.forEach(element => {
        renderDog(element)
    }))
}

function renderDog(dog){
    const dogBar = document.getElementById("dog-bar")
    const span = document.createElement("span")
    span.innerHTML = `${dog.name}`
    dogBar.append(span)
    span.addEventListener("click", (e) => {
        e.preventDefault()
        const dogInfo = document.getElementById("dog-info")
        dogInfo.innerHTML = ""
        const h2 = document.createElement("h2")
        h2.innerHTML = dog.name
        dogInfo.append(h2)
        const dogImg = document.createElement("img")
        dogImg.src = `${dog.image}`
        dogInfo.append(dogImg)
        const button = document.createElement("button")
        dogInfo.append(button)
        if(dog.isGoodDog === true){
            button.innerText = "Good Dog!"
        }
        else if(dog.isGoodDog === false){
            button.innerText = "Bad Dog!"
        }
        button.addEventListener("click", (e) =>{
            e.preventDefault()
            console.log(dog.isGoodDog)
            if(dog.isGoodDog === true){
                dog.isGoodDog = false
                button.InnerText = "Bad Dog!"
            }
            else if(dog.isGoodDog === false){
                dog.isGoodDog = true
                button.innerText = "Good Dog!" 
            }
            console.log(dog.id)
        })
    })
}

// fetch(`http://localhost:3000/pups/${dog.id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//                 },
//             body: JSON.stringify(dogObj)
//             })
//             .then(response => response.json())