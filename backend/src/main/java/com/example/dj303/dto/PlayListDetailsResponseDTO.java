package com.example.dj303.dto;

import com.example.dj303.domain.PlayList;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;

import java.util.List;
import java.util.stream.IntStream;

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
        String[] musics = StringUtils.split(playList.getMusicList(), "\n.");

        List<String> musicList = IntStream.range(0, musics.length)
                .filter(i -> i % 2 == 1).mapToObj(i -> StringUtils.trim(musics[i])).toList();

        return PlayListDetailsResponseDTO.builder()
                .id(playList.getId())
                .singer(playList.getSinger())
                .song(playList.getSong())
                .musicList(musicList)
                .isEvaluated(playList.getIsEvaluated())
                .build();
    }
}
