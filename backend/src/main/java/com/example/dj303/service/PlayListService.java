package com.example.dj303.service;

import com.example.dj303.domain.PlayList;
import com.example.dj303.dto.PlayListDetailsResponseDTO;
import com.example.dj303.dto.PlayListResponseDTO;
import com.example.dj303.dto.ReviewRequestDTO;
import com.example.dj303.dto.SongRequestDTO;
import com.example.dj303.global.exception.CustomException;
import com.example.dj303.global.response.SliceResponse;
import com.example.dj303.repository.PlayListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PlayListService {

    private final PlayListRepository playListRepository;
    private final ChatGPTService chatGPTService;

    @Transactional(readOnly = true)
    public PlayListDetailsResponseDTO findById(final Long id) {
        PlayList playList = playListRepository.findById(id)
                .orElseThrow(() -> new CustomException("해당 플레이 리스트가 존재 하지 않습니다."));

        return PlayListDetailsResponseDTO.toDTO(playList);
    }

    @Transactional(readOnly = true)
    public SliceResponse<PlayListResponseDTO> getPlayLists(final Long lastPlayListId) {
        Slice<PlayListResponseDTO> playListResponseDto = playListRepository.getPlayListById(lastPlayListId,
                PageRequest.of(0, 10)).map(PlayListResponseDTO::toDto);

        return SliceResponse.of(playListResponseDto);
    }

    /**
     * Chat GPT API를 통해 음악리스트 질의 후 테이블에 저장
     */
    @Transactional
    public Long createPlayList(final SongRequestDTO songRequestDTO) {
        String gptResult = chatGPTService.generatePlayList(songRequestDTO);

        PlayList entity = PlayList.toEntity(songRequestDTO, gptResult);

        return playListRepository.save(entity).getId();
    }


    /**
     * 플레이 리스트 평점 및 리뷰 업데이트
     */
    @Transactional
    public void updatePlayListReview(final ReviewRequestDTO reviewRequestDTO) {
        PlayList playList = playListRepository.findById(reviewRequestDTO.getId())
                .orElseThrow(() -> new CustomException("해당 플레이 리스트가 존재 하지 않습니다."));

        playList.updateReview(reviewRequestDTO);
    }
}
