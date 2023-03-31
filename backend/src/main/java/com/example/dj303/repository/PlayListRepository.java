package com.example.dj303.repository;

import com.example.dj303.domain.PlayList;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayListRepository extends JpaRepository<PlayList, Long> {

    @Query(value = "select p from PlayList p where p.id < :lastPlayListId order by p.id desc")
    Slice<PlayList> getPlayListById(final Long lastPlayListId, final Pageable pageable);

    @Query(value = "select p from PlayList p order by p.id desc")
    Slice<PlayList> getPlayListById(final Pageable pageable);
}
