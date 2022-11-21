package ui.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import domain.model.Course;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Delete extends RequestHandler {

    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        System.out.println("delete "+id);
        service.delete(id);
        return "OK";
    }
}
