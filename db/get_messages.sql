SELECT content, time_date, user_id, event_id, message_id from messages
WHERE message_id = $1