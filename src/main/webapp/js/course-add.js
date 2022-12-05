let course_add

const handleAddCourse = async () => {
    const name = document.getElementById("name").value
    const lector = document.getElementById("lectors").value
    const credits = document.getElementById("credits").value
    const semester = document.getElementById("semester").value

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

document
    .getElementById("add-course")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        handleAddCourse()
        addTextById("Added " + course_add.name + ", given by " + course_add.lector + " in semester " + course_add.semester + " and a course of " + course_add.credits + " credits", "course_add")
    })