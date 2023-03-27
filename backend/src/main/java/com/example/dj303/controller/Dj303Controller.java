package com.example.dj303.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dj303.dto.RequestDTO;
import com.example.dj303.dto.ResponseDTO;
import com.example.dj303.service.Dj303Service;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/gptApi")
public class Dj303Controller {

	private final Dj303Service dj303Service;

	@GetMapping("/playList")
	public ResponseDTO getPlayList(@Valid RequestDTO requestDTO) {
		return dj303Service.getPlayList(requestDTO);
	}

}
