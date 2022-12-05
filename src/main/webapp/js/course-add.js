const handleAddCourse = () => {
    const name = document.getElementById("name").value
    const lectors = document.getElementById("lectors").value
    const credits = document.getElementById("credits").value
    const semester = document.getElementById("semester").value

    const course_add = {name, lectors, credits, semester}
    course.push(course_add)
    console.log(course.length)
}

document
    .getElementById("add-course")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        handleAddCourse()
        addTextById("course_add","name")
    })