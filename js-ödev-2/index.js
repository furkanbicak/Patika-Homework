//DOM Etiketlerimizi ayarladık
let input = document.querySelector(`#task`)             // input alanı.
let btnAdded = document.querySelector(`#liveToastBtn`)  // ekle butonu.
let ul = document.querySelector(`#list`)                // ul listesi.


btnAdded.addEventListener(`click`, function () {

    let liNew = document.createElement(`li`)
    liNew.innerHTML = input.value 

    input.value.length > 0 ? ul.appendChild(liNew) : (alert("Bugün bir şey yapmayacak mısın ? :)"))
   
    input.value = ""; 

    // Girilen her bir bilginin local storagede tutulmasını sağladık.
    localStorage.setItem(`item ${localStorage.length + 1}`, liNew.innerText) 

    // li elementi tek tıklamada üstünü çizme.
    liNew.addEventListener(`click`, function () {
        liNew.style.textDecoration = "line-through"; 
        liNew.style.cursor = "pointer"
    })

    // li elementine çift tıklama ile silme.
    liNew.addEventListener(`dblclick`, function () { 
        ul.removeChild(liNew)
    })
})

