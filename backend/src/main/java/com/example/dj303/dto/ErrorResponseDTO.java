package com.example.dj303.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ErrorResponseDTO {

    private Integer code;
    private String error;

    @Builder
    public ErrorResponseDTO(final Integer code, final String error) {
        this.code = code;
        this.error = error;
    }
}
