create table if not exists play_list
(
    id           bigint                  not null auto_increment primary key,
    singer       varchar(30)             not null,
    song         varchar(30)             not null,
    music_list   varchar(1000)           not null,
    star         integer   default 0     not null,
    review       varchar(255),
    is_evaluated boolean   default false not null,
    created_at   timestamp default CURRENT_TIMESTAMP,
    updated_at   timestamp default CURRENT_TIMESTAMP
);