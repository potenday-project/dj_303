package com.example.dj303.global.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Slice;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SliceResponse<T> {

    private List<T> list = new ArrayList<>();
    private int size;
    private long totalElements;
    private boolean last;

    public static <T> SliceResponse<T> of(Slice<T> response) {
        return new SliceResponse<>(
                response.getContent(),
                response.getSize(),
                response.getNumberOfElements(),
                response.isLast()
        );
    }

}
