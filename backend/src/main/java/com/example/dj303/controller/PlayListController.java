package com.example.dj303.controller;

import com.example.dj303.dto.*;
import com.example.dj303.global.response.SliceResponse;
import com.example.dj303.service.PlayListService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/gptApi")
public class PlayListController {

    private final PlayListService playListService;

    @GetMapping("/{id}")
    public ResponseEntity<PlayListDetailsResponseDTO> getPlayList(@PathVariable final Long id) {
        PlayListDetailsResponseDTO playListDetailsResponseDTO = playListService.findById(id);
        return ResponseEntity.ok(playListDetailsResponseDTO);
    }

    @GetMapping("/feed")
    public SliceResponse<PlayListResponseDTO> getPlayLists(final Long lastPlayListId) {
        return playListService.getPlayLists(lastPlayListId);
    }

    @PostMapping("/ask")
    public ResponseEntity<CreatePlayListResponseDTO> createPlayList(@Valid @RequestBody final SongRequestDTO songRequestDTO) {
        Long playListId = playListService.createPlayList(songRequestDTO);

        return ResponseEntity.created(URI.create("/gptApi/" + playListId))
                .body(new CreatePlayListResponseDTO(playListId));
    }

    @PutMapping("/review")
    public ResponseEntity<Void> updatePlayListReview(@Valid @RequestBody final ReviewRequestDTO reviewRequestDTO) {
        playListService.updatePlayListReview(reviewRequestDTO);
        return ResponseEntity.noContent().build();
    }
}
