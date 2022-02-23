package com.example.demo.aspects;

import org.apache.juli.logging.Log;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Arrays;
import java.util.logging.Logger;

@RestControllerAdvice
public class TennisRestControllerAdvice {
    private final Logger logger = Logger.getLogger(TennisRestControllerAdvice.class.getName());
    @ExceptionHandler
    public StackTraceElement[] handle(Exception e) {
        return e.getStackTrace();
    }
}
