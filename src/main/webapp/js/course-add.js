let course_add
let error = false

const handleAddCourse = async () => {
    const name = document.getElementById("name").value
    console.log(name)
    error = false
    clearElement("error_name")
    clearElement("error_lectors")
    clearElement("error_credits")
    clearElement("error_semester")
    if (name == null || name.length === 0) {
        fillTextById("Name may not be empty", "error_name")
        error = true
    }
    const lector = document.getElementById("lectors").value
    if (lector == null || lector.length === 0) {
        fillTextById("Lectors may not be empty", "error_lectors")
        error = true
    }
    if (lector.trim().length === 0) {
        fillTextById("Lectors may not contain only spaces", "error_lectors")
        error = true
    }
    if (/\s/.test(lector.trim()) === false) {
        fillTextById("Lectors should have a first name and a last name", "error_lectors")
        error = true
    }
    const credits = document.getElementById("credits").value
    if (credits == null || credits.length === 0 || credits < 3 || credits > 30) {
        fillTextById("Credits must be between 3 and 30", "error_credits")
        error = true
    }
    const semester = document.getElementById("semester").value
    if (semester == null || semester.length === 0 || semester < 1 || semester > 6) {
        fillTextById("Semester must be between 1 and 6", "error_semester")
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