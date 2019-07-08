SELECT * FROM messages
JOIN messages on messages.message_id = events.id
WHERE events.id = ${event};