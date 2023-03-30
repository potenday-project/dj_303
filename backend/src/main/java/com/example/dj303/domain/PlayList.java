package com.example.dj303.domain;

import com.example.dj303.dto.ReviewRequestDTO;
import com.example.dj303.dto.SongRequestDTO;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@ToString
@NoArgsConstructor
@DynamicInsert
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "play_list")
public class PlayList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String singer;

    private String song;

    @Column(name = "music_list")
    private String musicList;

    private Integer star;

    private String review;

    @Column(name = "is_evaluated")
    private Boolean isEvaluated;

    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Builder
    public PlayList(Long id, String singer, String song, String musicList, Integer star, String review, Boolean isEvaluated) {
        this.id = id;
        this.singer = singer;
        this.song = song;
        this.musicList = musicList;
        this.star = star;
        this.review = review;
        this.isEvaluated = isEvaluated;
    }

    public void updateReview(ReviewRequestDTO reviewRequestDTO) {
        this.star = reviewRequestDTO.getStar();
        this.review = reviewRequestDTO.getReview();
        this.isEvaluated = true;
    }

    public static PlayList toEntity(SongRequestDTO songRequestDTO, String musicList) {
        return PlayList.builder()
                .singer(songRequestDTO.getSinger())
                .song(songRequestDTO.getSong())
                .musicList(musicList)
                .build();
    }
}
