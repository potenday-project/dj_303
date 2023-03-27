package com.example.dj303.dto;

import java.util.List;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ResponseDTO {

	private Integer code;
	private List<String> playList;

	@Builder
	public ResponseDTO(Integer code, List<String> playList) {
		this.code = code;
		this.playList = playList;
	}
}
