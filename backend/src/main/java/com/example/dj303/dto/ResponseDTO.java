package com.example.dj303.dto;

import java.util.List;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ResponseDTO {

	private String input;
	private Integer code;
	private List<String> playList;

	@Builder
	public ResponseDTO(String input, Integer code, List<String> playList) {
		this.input = input;
		this.code = code;
		this.playList = playList;
	}
}
