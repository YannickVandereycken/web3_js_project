const fetchCourses = async () => {
    const response = await fetch("http://localhost:8080/Controller?command=Overview")
    return await response.json()
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
            // highlight off the mouseover target
            document.getElementById(`${course.id}`).style.background = "";
            setNoInformation("information")
        }, false);
        tr.addEventListener("dblclick", (event) => {
            const id = document.getElementById(`${course.id}`).id
            handleDeleteCourse(id)
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
    let courses
    let name = document.getElementById("name").value
    if (name.length === 0) {
        courses = await fetchCourses()
    } else {
        courses = await handleSearchCourse(name)
    }
    renderCourse(courses)
}

const handleSearchCourse = async (name) => {
    let response = await fetch("http://localhost:8080/Controller?command=Search", {
        method: "POST",
        headers: {
            // Accept Header tells the API that it is expecting the response in the specified media type e.g. application/json
            Accept: "application/json",
            // Content-Type tells the API about the media type of the request being sent in the request body e.g. application/json
            "Content-Type": "application/json",
        },
        body: JSON.stringify(name),
    })
    return await response.json()
}

const handleDeleteCourse = async (id)=>{
    let response = await fetch(`http://localhost:8080/Controller?command=Delete&id=${id}`)
    return await response.json()
}

const getInformation = (course, id) => {
    clearElement(id)
    const information = document.createTextNode(`${course.name} has ${course.credits} credits and will be educated in semester ${course.semester}`)
    document.getElementById(id).appendChild(information)
}

const setNoInformation = (id) => {
    clearElement(id)
    const text = document.createTextNode("No Course Selected")
    document.getElementById(id).appendChild(text)
}

setInterval(fetchAndRenderCourses, 1000)