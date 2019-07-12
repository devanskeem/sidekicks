UPDATE events
SET name = ${title},
    description = ${description},
    cost = ${cost},
    location = ${location},
    image = ${image}
WHERE event_id = ${id};