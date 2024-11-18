package org.example.controller;

import org.example.model.Cliente;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClienteController {

    @GetMapping("/api/clientes")
    public Cliente obtenerCliente(@RequestParam String tipoDocumento, @RequestParam String numeroDocumento) {
      if ("C".equals(tipoDocumento) && "23445322".equals(numeroDocumento)) {
            // Simulamos la información del cliente
            return new Cliente(
                    "Juan", "Carlos", "Perez", "Gomez", "123456789", "Calle 123", "Bogotá"
            );
        } else {
            throw new ClienteNoEncontradoException("Cliente no encontrado");
        }
    }
}