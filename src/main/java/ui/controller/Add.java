package ui.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import domain.model.Course;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Add extends RequestHandler {

    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        Course course = null;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            course = objectMapper.readValue(request.getInputStream(), Course.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        getService().add(course);
        return "OK";
    }
}