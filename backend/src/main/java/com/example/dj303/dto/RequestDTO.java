package com.example.dj303.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RequestDTO {

	@NotNull
	@Size(min = 3, max = 30, message = "3자 이상 30자 이하 입력해야 합니다.")
	private String question;

	public RequestDTO(String question) {
		this.question = question;
	}
}
