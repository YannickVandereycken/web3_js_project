package ui.controller;

import domain.service.CourseService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public abstract class RequestHandler {
    protected CourseService service;

    public abstract String handleRequest (HttpServletRequest request, HttpServletResponse response);

    public CourseService getService() {
        return service;
    }

    public void setService(CourseService service) {
        this.service = service;
    }
}
