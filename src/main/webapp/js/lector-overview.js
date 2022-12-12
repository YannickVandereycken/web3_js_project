const fetchCourses = async () => {
    const response = await fetch("http://localhost:8080/Controller?command=Lectors")
    return await response.json()
}

const renderCourse = (lectors) => {
    const id = "lectors"
    clearElement(id)
    const trheader = document.createElement("tr")
    const tdnameheader = document.createElement("td")
    const nameheader = document.createTextNode("Name")
    tdnameheader.appendChild(nameheader)
    const tdfirstnameheader = document.createElement("td")
    const firstnameheader = document.createTextNode("Firstname")
    tdfirstnameheader.appendChild(firstnameheader)
    trheader.appendChild(tdnameheader)
    trheader.appendChild(tdfirstnameheader)
    document.getElementById(id).appendChild(trheader)
    let sorted = sortLectors(lectors)
    sorted.forEach((lector) => {
        const tr = document.createElement("tr")
        const tdname = document.createElement("td")
        const name = document.createTextNode(`${lector.name}`)
        tdname.appendChild(name)
        const tdlectors = document.createElement("td")
        const lectors = document.createTextNode(`${lector.firstname}`)
        tdlectors.appendChild(lectors)
        tr.appendChild(tdname)
        tr.appendChild(tdlectors)
        document.getElementById(id).appendChild(tr)
    })
}

const fetchAndRenderCourses = async () => {
    let lectors = await fetchCourses()
    renderCourse(lectors)
}

setInterval(fetchAndRenderCourses, 1000)

//sorting
function compare(a, b) {
    return a.name.localeCompare(b.name)
}

const sortLectors = (lectors) => {
    let sorted = []
    lectors.forEach((lector) => {
        const l = lector.split(" ")
        const name = l[1]
        const firstname = l[0]
        let lec = {name, firstname}
        // console.log(lec)
        sorted.push(lec)
    })
    sorted.sort(compare)
    // console.log(sorted)
    return sorted
}