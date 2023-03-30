package com.example.dj303.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReviewRequestDTO {

    @NotNull
    private Long id;

    @NotNull
    @Max(value = 5)
    @PositiveOrZero
    private Integer star;
    private String review;

    @Builder
    public ReviewRequestDTO(final Long id, final Integer star, final String review) {
        this.id = id;
        this.star = star;
        this.review = review;
    }
}
