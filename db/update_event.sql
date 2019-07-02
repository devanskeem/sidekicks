UPDATE events
SET name = $1,
    description = $2,
    public = $3,
    category = $4,
    total_people = $5,
    cost = $6,
    location = $7
WHERE id = $9;