INSERT INTO event_users(event_id, user_id)
values ( $1, $2)
RETURNING * ;