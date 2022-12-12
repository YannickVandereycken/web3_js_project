const fetchCourses = async () => {
    const response = await fetch("http://localhost:8080/Controller?command=Overview")
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
        tr.setAttribute("id", `${course.id}`)
        tr.addEventListener("mouseover", (event) => {
            // highlight the mouseover target
            document.getElementById(`${course.id}`).style.background = "orange";
            getInformation(course, "information")
        }, false);
        tr.addEventListener("mouseout", (event) => {
            // highlight the mouseover target
            document.getElementById(`${course.id}`).style.background = "";
        }, false);
        const tdname = document.createElement("td")
        const name = document.createTextNode(`${course.name}`)
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

const getInformation = (course, id) => {
    clearElement(id)
    const information = document.createTextNode(`${course.name} has ${course.credits} credits and will be educated in semester ${course.semester}`)
    document.getElementById(id).appendChild(information)
}

setInterval(fetchAndRenderCourses, 1000)