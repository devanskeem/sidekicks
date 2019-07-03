module.exports = {
    getAllEvents: (req, res) => {
        const db = req.app.get('db')
        db.get_all_events().then(events =>
            res.status(200).send(events))
            .catch(err => res.status(500).send(console.log(err)));
    },

    getEventById: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;
        id = +id;

        db.get_event_by_id({id})
            .then(event => {
            
            res.status(200).send(event)
            })
            .catch(err => res.status(500).send(console.log(err)));
    },
    getEventsByUser: (req, res) => {
        const db = req.app.get('db')

        db.get_events_by_user().then(event => {
            res.status(200).send(event)
                .catch(err => res.status(500).send(console.log(err)));
        })
    },
    addEvent: (req, res) => {
        const db = req.app.get('db');
        const {
            eventTitle,  
            eventDescription, 
            eventHost,
            attendees
        } = req.body

        db.create_event({
            eventTitle,  
            eventDescription, 
            eventHost,
            attendees
        })
        .then(event => {
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