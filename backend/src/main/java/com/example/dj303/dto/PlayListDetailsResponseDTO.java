package com.example.dj303.dto;

import com.example.dj303.domain.PlayList;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;

import java.util.Arrays;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PlayListDetailsResponseDTO {

    private Long id;
    private String singer;
    private String song;
    private List<String> musicList;
    private Boolean isEvaluated;

    @Builder
    public PlayListDetailsResponseDTO(final Long id, final String singer, final String song,
                                      final List<String> musicList, final Boolean isEvaluated) {
        this.id = id;
        this.singer = singer;
        this.song = song;
        this.musicList = musicList;
        this.isEvaluated = isEvaluated;
    }

    public static PlayListDetailsResponseDTO toDTO(final PlayList playList) {
        List<String> musicList = Arrays
                .stream(StringUtils.split(playList.getMusicList(), "\n")).toList();

        return PlayListDetailsResponseDTO.builder()
                .id(playList.getId())
                .singer(playList.getSinger())
                .song(playList.getSong())
                .musicList(musicList)
                .isEvaluated(playList.getIsEvaluated())
                .build();
    }
}
