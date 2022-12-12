package ui.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.model.Course;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class Search extends RequestHandler {

    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        String name = null;
        //System.out.println(name);
        try {
            //System.out.println(request.getInputStream().read());
            ObjectMapper objectMapper = new ObjectMapper();
            name = objectMapper.readValue(request.getInputStream(), String.class);
            System.out.println("1 " +name);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("2 " +name);
        return toJSON(service.searchCourse(name));
    }

    private String toJSON(List<Course> courses) {
        ObjectMapper mapper = new ObjectMapper();
        String result = "";
        try {
            result = mapper.writeValueAsString(courses);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return result;
    }
}