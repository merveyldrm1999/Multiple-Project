function addTodo() {
    //elemente ulaş
    const text = document.getElementById("todo-text").value
    //p elementi oluştur
    const pEl = document.createElement("p")
    //elemente fonksiyon ata
    pEl.addEventListener("click", secondStep)
    //element içinde
    pEl.innerText = text
    //içine atılcak elemente ulaş
    const todoDiv = document.getElementById("yapilacak")
    //elementi ekle
    todoDiv.appendChild(pEl)
    document.getElementById("todo-text").value = ''

}

function secondStep(e) {
    // tıklanan elemente ulaş
    const pEl = e.target;
    // elementi klonla
    const clonedPEl = pEl.cloneNode(true)
    // klonlanan elemente fonksiyon ata
    clonedPEl.addEventListener("click", thirdStep)
    // içine atılacak elemente ulaş
    const todoDiv = document.getElementById("yapilan")
    // klonlu elementi içeri at
    todoDiv.appendChild(clonedPEl)
    // tıklanan elementi sil
    pEl.remove()
}
function thirdStep(e) {
    //tıklanan elemente ulaş
    const pEl = e.target;
    //elementi klonla
    const clonedPEl = pEl.cloneNode(true)
    //klonlanan elemente fonksiyon ata // elementi sil
    clonedPEl.addEventListener("click", (e) => {
        e.target.remove()
    })
    //içine atılcak elemente ulaş
    const todoDiv = document.getElementById("yapilmis")
    //klonlu elementi içeri at
    todoDiv.appendChild(clonedPEl)
    //tıklanan elementi sil
    pEl.remove()
}
