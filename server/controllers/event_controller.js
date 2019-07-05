module.exports = {
    getAllEvents: async (req, res) => {
        const db = req.app.get('db')
        try {
            const allEvents = await db.get_all_events()
            res.status(200).send(allEvents)
        }
        catch {
            res.status(500).send('Events not found')
        }
    },
    getEventById: async (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;
        id = +id;

        const event =  await db.get_event_by_id({id})
        console.log(event)
        res.status(200).send(event)
    },
    getEventsByCreator: async (req, res) => {
        const db = req.app.get('db')
        let {creator_id} = req.params
        creator_id = +creator_id
        const events = await db.get_events_by_creator({creator_id})
        res.status(200).send(events)
    },
    addEvent: async (req, res) => {
        const db = req.app.get('db');
        const {
            name,  
            description, 
            host,
            category,
            total_people,
            cost, 
            location,
            image,
            user_id
        } = req.body
        const event = await db.create_event({
            name,  
            description, 
            host,
            category,
            total_people,
            cost, 
            location,
            image,
            creator_id: user_id
        })
        res.status(200).send(event)
    
    },
    updateEvent: (req, res) =>{
        const db = req.app.get('db');
        const { id } = req.params;
        const event = db.get_event_by_id({id})
        const newEvent = {...event, ...req.body}

        db.update_event({newEvent, id})
            .then(() => res.status(200).send())
            .catch(err => {
                res.status(500).send();
            });
    },
    deleteEvent: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_event([id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    }
}