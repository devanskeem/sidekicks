module.exports = {
    getMessagesByEvents: (req, res) => {
        const db = req.app.get([id])
        db.get_messages_by_events().then(events => res.status(200).send(events))
        .catch(err => res.status(500).send(console.log(err)));
    },

    deleteMessagesById: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_message_by_id({id}).then(() => res.status(200).send())
        .catch(() => res.status(500).send());

    },

    deleteMessagesByEvent: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        
        db.delete_messages_by_event({id}).then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    }
}