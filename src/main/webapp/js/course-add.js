let course_add
let error = false

const handleAddCourse = async () => {
    const name = document.getElementById("name").value
    console.log(name)
    if (name == null || name.length === 0) {
        clearElement("error_name")
        addTextById("Name may not be empty", "error_name")
        error = true
    }
    const lector = document.getElementById("lectors").value
    if (lector == null || name.length === 0) {
        clearElement("error_lectors")
        addTextById("Lectors may not be empty", "error_lectors")
        error = true
    }
    const credits = document.getElementById("credits").value
    if (credits == null || name.length === 0) {
        clearElement("error_credits")
        addTextById("Credits may not be empty", "error_credits")
        error = true
    }
    const semester = document.getElementById("semester").value
    if (semester == null || name.length === 0) {
        clearElement("error_semester")
        addTextById("Semester may not be empty", "error_semester")
        error = true
    }


    if (!error) {
        course_add = {name, lector, credits, semester}

        await fetch("http://localhost:8080/Controller?command=Add", {
            method: "POST",
            headers: {
                // Accept Header tells the API that it is expecting the response in the specified media type e.g. application/json
                Accept: "application/json",
                // Content-Type tells the API about the media type of the request being sent in the request body e.g. application/json
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course_add),
        })
    }
}

document
    .getElementById("add-course")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        handleAddCourse()
        clearElement("course_add")
        addTextById("Added " + course_add.name + ", given by " + course_add.lector + " in semester " + course_add.semester + " and a course of " + course_add.credits + " credits", "course_add")
    })