package com.italo.backend.controller;

import com.italo.backend.dto.AuthRequest;
import com.italo.backend.dto.AuthResponse;
import com.italo.backend.model.Usuario;
import com.italo.backend.repository.UsuarioRepository;
import com.italo.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String register(@RequestBody AuthRequest request) {
        Usuario user = new Usuario();
        user.setUsername(request.username);
        user.setPassword(passwordEncoder.encode(request.password));
        usuarioRepository.save(user);
        return "Usuario registrado";
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        try {
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.username, request.password)
            );
        } catch (AuthenticationException e) {
            throw new UsernameNotFoundException("Credenciales inválidas");
        }

        String token = jwtUtil.generateToken(request.username);
        return new AuthResponse(token);
    }
}
