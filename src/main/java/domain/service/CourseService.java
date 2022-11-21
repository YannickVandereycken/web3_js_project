package domain.service;

import domain.model.Course;

import java.util.ArrayList;
import java.util.List;

public class CourseService {

    private ArrayList<Course> courses = new ArrayList<>();
    private static int id = 0;

    public CourseService() {
        Course web3 = new Course("Webontwikkeling 3", "Greetje Jongen, Elke Steegmans", 3, 3);
        this.add(web3);
        Course web4 = new Course("Webontwikkeling 4", "Johan Pieck, Elke Steegmans", 3, 4);
        this.add(web4);
    }

    public void add(Course course) {
        id++;
        course.setId(id);
        courses.add(course);
    }

    public ArrayList<Course> getAll() {
        return courses;
    }

    public boolean delete (int id) {
        for (Course course: courses) {
            if (course.getId() == id) {
                courses.remove(courses.indexOf(course));
                return true;
            }
        };
        return false;
    }

    public List<Course> getCoursesOfLector (String name) {
        List<Course> result = new ArrayList<Course>();
        for (Course course: courses) {
            if (course.getLector().contains(name)) {
                result.add(course);
            }
        }
        return result;
    }

    public List<String> getLectors () {
        List<String> result = new ArrayList<String>();
        for (Course course: courses) {
            String lector = course.getLector();
            String[] lectors = lector.split(",");
            for (int i= 0; i<lectors.length; i++) {
                if(! result.contains(lectors[i].trim())) {
                    result.add(lectors[i].trim());
                }
            }
        }
        return result;
    }


 }
