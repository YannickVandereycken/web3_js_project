const fetchCourses = async () => {
    const response =  await fetch("http://localhost:8080/Controller?command=Overview")
    const course = await response.json()
    return course
}

const renderCourse = (courses) => {
    const id = "courses"
    clearElement(id)
    courses.forEach((course) => {
        const tr = document.createElement("tr")
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

setInterval(fetchAndRenderCourses, 1000)