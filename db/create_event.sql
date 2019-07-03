INSERT INTO events (name, description, host, category, total_people, cost, image, location)
values (${name}, ${description}, ${host}, ${category}, ${total_people}, ${cost}, ${image}, ${location})
returning name, description, host, category, total_people, cost, location