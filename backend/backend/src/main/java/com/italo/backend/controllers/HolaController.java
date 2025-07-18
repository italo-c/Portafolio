package com.italo.backend.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HolaController {

    @GetMapping("/hola")
    public String hola() {
        return "Hola desde Spring Boot 🚀";
    }
}
