package com.example.dj303.service;

import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.dj303.dto.ChatGPT;
import com.example.dj303.dto.RequestDTO;
import com.example.dj303.dto.ResponseDTO;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class Dj303Service {

	@Value("${gpt.apikey}")
	private String API_KEY;
	private static final String COMPLETION_ENDPOINT = "https://api.openai.com/v1/completions";

	public ResponseDTO getPlayList(RequestDTO requestDTO) {
		String gptResult = generatePlayList(requestDTO.getQuestion());

		List<String> playList = Arrays.stream(StringUtils.split(gptResult, "\n")).toList();

		return ResponseDTO
			.builder()
			.code(HttpStatus.OK.value())
			.playList(playList)
			.build();
	}

	public String generatePlayList(String text) {
		String prompt = text + " 해당 질문의 결과를 리스트로 출력 해주세요.";

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Authorization", "Bearer " + API_KEY);

		ChatGPT chatGPT = ChatGPT.builder()
			.model("text-davinci-003")
			.prompt(prompt)
			.temperature(0.5f)
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
