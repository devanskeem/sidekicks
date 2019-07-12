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
        const event_id = +id;

        const event =  await db.get_event_by_id({id: event_id})
        res.status(200).send(event)
    },
    getEventsByHost: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const user_id = +id
        const events = await db.get_events_by_host({user_id})
        res.status(200).send(events)
    },
    getEventsByUser: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const user_id = +id
        const eventObjArr = []
        const eventIdArr = await db.get_events_by_user({user_id})
        .catch(err => res.status(500).send(err))
        for (let i = 0; i < eventIdArr.length; i++) {
            const event = await db.get_event_by_id({id: eventIdArr[i].event_id})
            eventObjArr.push(event[0])
        }
        res.status(200).send(eventObjArr)
    },
    joinEvent: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {user_id} = req.session.passport.user
        const event_id = +id
        db.join_event({user_id, event_id})
        res.sendStatus(200)
    },
    leaveEvent: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {user_id} = req.session.passport.user
        const event_id = +id
        db.leave_event({user_id, event_id})
        res.sendStatus(200)
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
    updateEvent: async (req, res) =>{
        const db = req.app.get('db');
        const { id, title, description, location, cost, image } = req.body;
        const event = await db.update_event({
            id,
            title,
            description,
            location,
            cost,
            image
        })
        res.sendStatus(200).send(event)
    },
    deleteEvent: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;
        id = parseInt(id)
        db.delete_event([id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    }
}