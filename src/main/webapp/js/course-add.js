let course_add = {}
const handleAddCourse = () => {
    const name = document.getElementById("name").value
    const lectors = document.getElementById("lectors").value
    const credits = document.getElementById("credits").value
    const semester = document.getElementById("semester").value

    course_add = {name, lectors, credits, semester}
    course.push(course_add)
    console.log(course.length)
}

document
    .getElementById("add-course")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        handleAddCourse()
        addTextById("Added " + course_add.name + ", given by " + course_add.lectors + " in semester " + course_add.semester + " and a course of " + course_add.credits + " credits", "course_add")
    })