package com.example.dj303.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SongRequestDTO {

    @NotNull
    @Size(min = 1, max = 30, message = "1~30정자 이내로 입력해야 합니다.")
    private String singer;

    @NotNull
    @Size(min = 1, max = 30, message = "1~30자 이내로 입력해야 합니다.")
    private String song;

    public SongRequestDTO(final String singer, final String song) {
        this.singer = singer;
        this.song = song;
    }
}
