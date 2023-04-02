package com.example.dj303;

import com.example.dj303.dto.SongRequestDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@Transactional
@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("플레이리스트 테스트")
public class PlayListControllerTest {

    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    protected ObjectMapper objectMapper;

    @Test
    @DisplayName("플레이리스트 생성(성공)")
    void createPlayListSuccess() throws Exception {
        // given
        SongRequestDTO songRequestDTO = new SongRequestDTO("윤하", "사건의 지평선");

        // when
        ResultActions resultActions = this.mockMvc.perform(post("/gptApi/ask")
                .contentType(MediaType.APPLICATION_JSON)
                .content(this.objectMapper.writeValueAsString(songRequestDTO))
        );

        // then
        resultActions.andExpect(status().isCreated())
                .andExpect(jsonPath("id").isNumber());
    }

    @Test
    @DisplayName("플레이리스트 생성(실패)")
    void createPlayListFail() throws Exception {
        // given
        SongRequestDTO songRequestDTO = new SongRequestDTO("", "사건의 지평선");

        // when
        ResultActions resultActions = this.mockMvc.perform(post("/gptApi/ask")
                .contentType(MediaType.APPLICATION_JSON)
                .content(this.objectMapper.writeValueAsString(songRequestDTO))
        );

        // then
        resultActions.andExpect(status().is4xxClientError())
                .andExpect(jsonPath("code").value(400))
                .andExpect(jsonPath("error").value("1~30자 이내로 입력해야 합니다."));
    }

    @Test
    @DisplayName("플레이리스트 목록 조회")
    void getPlayLists() throws Exception {
        // when
        ResultActions resultActions = this.mockMvc.perform(get("/gptApi/feed")
                .queryParam("lastPlayListId", String.valueOf(10L))
        );

        // then
        resultActions.andExpect(status().isOk())
                .andExpect(jsonPath("list").isArray())
                .andExpect(jsonPath("size").value(20))
                .andExpect(jsonPath("totalElements").isNumber())
                .andExpect(jsonPath("last").isBoolean());
    }

    @Test
    @DisplayName("플레이리스트 조회(성공)")
    void getPlayListSuccess() throws Exception {
        // when
        ResultActions resultActions = this.mockMvc.perform(get("/gptApi/107"));

        // then
        resultActions.andExpect(status().isOk())
                .andExpect(jsonPath("id").value(107L))
                .andExpect(jsonPath("singer").value("maroon5"))
                .andExpect(jsonPath("song").value("sugar"))
                .andExpect(jsonPath("musicList").isArray())
                .andExpect(jsonPath("isEvaluated").value(false));
    }

    @Test
    @DisplayName("플레이리스트 조회(실패)")
    void getPlayListFail() throws Exception {
        // when
        ResultActions resultActions = this.mockMvc.perform(get("/gptApi/888888"));

        // then
        resultActions.andExpect(status().is4xxClientError())
                .andExpect(jsonPath("code").value(400))
                .andExpect(jsonPath("error").value("해당 플레이 리스트가 존재 하지 않습니다."));
    }


}
