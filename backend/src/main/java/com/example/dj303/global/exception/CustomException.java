package com.example.dj303.global.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class CustomException extends RuntimeException {
    private String message;

    public CustomException(final String message) {
        this.message = message;
    }
}
