package ui.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import domain.model.Course;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Delete extends RequestHandler {

    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        String id_str = null;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            id_str = objectMapper.readValue(request.getInputStream(), String.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        if (id_str != null) {
            int id = Integer.parseInt(id_str);
            service.delete(id);
            return "OK";
        }
        return "NOK";
    }
}
