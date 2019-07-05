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
    getEventsByUser: async (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const events = await db.get_events_by_user({user_id}).then(() => {
            res.status(200).send(events)
        })
    },
    addEvent: (req, res) => {
        const db = req.app.get('db');
        const {
            name,  
            description, 
            host,
            category,
            total_people,
            cost, 
            location,
            image
        } = req.body
        const event = db.create_event({
            name,  
            description, 
            host,
            category,
            total_people,
            cost, 
            location,
            image
        })
        .then(() => {
            res.status(200).send(event)
        })
        .catch(err  => res.status(500).send
        (console.log(err)));
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