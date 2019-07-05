SELECT * FROM events
JOIN events on events.events_id = event.id
WHERE events.id = ${id};