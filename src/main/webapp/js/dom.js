const clearElement = (id) => {
    const element = document.getElementById(id)
    element.innerHTML = "<caption>PBA TI</caption>\n" +
        "            <tr>\n" +
        "                <th>Name</th>\n" +
        "                <th>Lectors</th>\n" +
        "            </tr>"
}
const addTextById = (text,id) => {
    console.log(text,id)
    const p = document.createElement("p")
    const tx = document.createTextNode(text.toString())
    // const text = document.createTextNode(`Woef is een hond van 5 jaar oud.`)
    p.appendChild(tx)
    document.getElementById(id).appendChild(p)
}