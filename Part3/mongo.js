const mongoose = require('mongoose')

const url = 'mongodb+srv://Jequtin:ou@cluster0.btowr.mongodb.net/fullstack-notes'

var args = process.argv.slice(2);

mongoose.connect(url)

const reminderSchema = mongoose.model('Reminder', {
    content: String,
    date: Date,
    important: Boolean
})


if (args.length === 0) {
    reminderSchema
        .find({})
        .then(result => {
            result.forEach(reminder => {
                console.log(reminder)
            })
            mongoose.connection.close()
        })
}
else {
    const reminder = new reminderSchema({
        content: args[0],
        date: args[1],
        important: false
    })
    reminder
        .save()
        .then(response => {
            console.log(reminder + ' reminder saved!')
            mongoose.connection.close()
        })
    }