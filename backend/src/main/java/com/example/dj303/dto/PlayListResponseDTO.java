package com.example.dj303.dto;

import com.example.dj303.domain.PlayList;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PlayListResponseDTO {
    private Long id;
    private String singer;
    private String song;

    @Builder
    public PlayListResponseDTO(Long id, String singer, String song) {
        this.id = id;
        this.singer = singer;
        this.song = song;
    }

    public static PlayListResponseDTO toDto(PlayList playList) {
        return PlayListResponseDTO.builder()
                .id(playList.getId())
                .singer(playList.getSinger())
                .song(playList.getSong())
                .build();
    }
}
