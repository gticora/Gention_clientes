package org.example.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ClienteNoEncontradoException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleClienteNoEncontradoException(ClienteNoEncontradoException ex) {
        return ex.getMessage();
    }
}