CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    content varchar(40),
    time_date TIMESTAMP,
    user_id integer,
    event_id integer,
    message_id integer,
);