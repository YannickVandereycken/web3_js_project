const clearElement = (id) => {
    const element = document.getElementById(id)
    element.innerHTML = ""
}

const addTextById = (text, id) => {
    console.log(text, id)
    const p = document.createElement("p")
    const tx = document.createTextNode(text.toString())
    p.appendChild(tx)
    document.getElementById(id).appendChild(p)
}