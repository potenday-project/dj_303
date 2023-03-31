package com.example.dj303.service;

import com.example.dj303.domain.ChatGPT;
import com.example.dj303.dto.SongRequestDTO;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class ChatGPTService {

    @Value("${gpt.apikey}")
    private String API_KEY;
    private static final String COMPLETION_ENDPOINT = "https://api.openai.com/v1/completions";

    /**
     * GPT를 통해 플레이 리스트 요청
     */
    public String generatePlayList(final SongRequestDTO songRequestDTO) {

        String prompt = songRequestDTO.getSinger()
                + " - "
                + songRequestDTO.getSong()
                + "와 비슷한 노래들을 추천 해줘."
                + "해당 질문의 결과를 가수 - 제목 형태의 리스트로 4개만 출력 해줘.";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + API_KEY);

        ChatGPT chatGPT = ChatGPT.builder()
                .model("text-davinci-003")
                .prompt(prompt)
                .temperature(0.8f)
                .maxTokens(1000)
                .build();

        HttpEntity<ChatGPT> requestEntity = new HttpEntity<>(chatGPT, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(COMPLETION_ENDPOINT, requestEntity, String.class);

        try {
            ObjectMapper mapper = new ObjectMapper();

            JsonNode root = mapper.readTree(response.getBody());
            JsonNode choices = root.path("choices");

            return choices.get(0).get("text").asText();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
