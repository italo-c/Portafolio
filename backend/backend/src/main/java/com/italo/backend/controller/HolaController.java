package com.italo.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HolaController {

    @GetMapping("/hola")
    public String hola(@RequestParam String nombre) {

        return "Hola, " + nombre + " desde el backend!";


    }
}
