package com.italo.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
    @GetMapping("/")
    public String home() {
        return "Bienvenido al backend 👨‍💻";
    }
}

