package com.filigree.web_ocp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller to handle Angular frontend routing
 */
@Controller
public class AngularController {

    /**
     * Forward all non-API requests to Angular's index.html
     * This allows Angular to handle client-side routing
     */
    @RequestMapping(value = {
        "/",
        "/home/**",
        "/tools/**",
        "/{path:[^\\.]*}"
    })
    public String forward() {
        return "forward:/index.html";
    }
}
