package com.example.dj303.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatGPT {
    private String model;
    private String prompt;
    private Float temperature;
    @JsonProperty(value = "max_tokens")
    private Integer maxTokens;

    @Builder
    public ChatGPT(String model, String prompt, Float temperature, Integer maxTokens) {
        this.model = model;
        this.prompt = prompt;
        this.temperature = temperature;
        this.maxTokens = maxTokens;
    }
}
