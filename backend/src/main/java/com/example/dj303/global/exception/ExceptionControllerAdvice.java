package com.example.dj303.global.exception;

import com.example.dj303.dto.ErrorResponseDTO;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    /**
     * CustomException 처리
     */
    @ExceptionHandler(CustomException.class)
    protected ResponseEntity<ErrorResponseDTO> handleCustomException(final CustomException e) {
        ErrorResponseDTO errorResponseDTO = ErrorResponseDTO
                .builder()
                .code(HttpStatus.BAD_REQUEST.value())
                .error(e.getMessage())
                .build();

        return ResponseEntity.badRequest().body(errorResponseDTO);
    }

    /**
     * validation 예외 처리 핸들러
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponseDTO> handleValidationExceptions(final MethodArgumentNotValidException ex) {
        // 에러 공통 메세지 처리 (상태코드, 메세지 내용)
        String message = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .findFirst()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .orElseGet(ex::getMessage);

        ErrorResponseDTO errorResponseDTO = ErrorResponseDTO
                .builder()
                .code(HttpStatus.BAD_REQUEST.value())
                .error(message)
                .build();

        return ResponseEntity.badRequest().body(errorResponseDTO);
    }
}
