const fetchCourses = async () => {
    const response =  await fetch("http://localhost:8080/Controller?command=Overview")
    const course = await response.json()
    return course
}

const renderCourse = (courses) => {
    const id = "courses"
    clearElement(id)
    const trheader = document.createElement("tr")
    const tdnameheader = document.createElement("td")
    const nameheader = document.createTextNode("Name")
    tdnameheader.appendChild(nameheader)
    const tdlectorsheader = document.createElement("td")
    const lectorsheader = document.createTextNode("Lectors")
    tdlectorsheader.appendChild(lectorsheader)
    trheader.appendChild(tdnameheader)
    trheader.appendChild(tdlectorsheader)
    document.getElementById(id).appendChild(trheader)
    courses.forEach((course) => {
        const tr = document.createElement("tr")
        tr.setAttribute("id", "course")
        const tdname = document.createElement("td")
        const name = document.createTextNode( `${course.name}` )
        tdname.appendChild(name)
        const tdlectors = document.createElement("td")
        const lectors = document.createTextNode(`${course.lector}`)
        tdlectors.appendChild(lectors)
        tr.appendChild(tdname)
        tr.appendChild(tdlectors)
        document.getElementById(id).appendChild(tr)
    })
}

const fetchAndRenderCourses = async () => {
    const courses = await fetchCourses()
    renderCourse(courses)
}
const hover = document.getElementById("course")
hover.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.background = "orange";

    // reset the color after a short delay
    setTimeout(() => {
        event.target.style.background = "";
    }, 500);
}, false);


setInterval(fetchAndRenderCourses, 1000)