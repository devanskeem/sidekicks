SELECT 
name,
description, 
public,
category,
total_people,
cost,
image, 
event_id,
host,
location 
WHERE event_id = $1;