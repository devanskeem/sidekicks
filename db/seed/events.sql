CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name varchar(40),
    description varchar(40),
    public BOOLEAN,
    category text,
    total_people integer,
    cost integer,
    location varchar(20),
    url text, 
    image text,
    event_id integer
);