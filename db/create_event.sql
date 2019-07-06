INSERT INTO events (name, description, host, category, total_people, cost, image, location, creator_id)
values (${name}, ${description}, ${host}, ${category}, ${total_people}, ${cost}, ${image}, ${location}, ${creator_id})
returning name, description, host, category, total_people, cost, location