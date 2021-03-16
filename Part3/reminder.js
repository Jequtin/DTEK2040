const mongoose = require('mongoose')

// Replace with the URL of your own database. Do not store the password on GitLab!
const url = 'mongodb+srv://Jequtin:ou@cluster0.btowr.mongodb.net/fullstack-notes'

mongoose.connect(url)

const reminderSchema = mongoose.model('Reminder', {
    content: String,
    date: Date,
    important: Boolean,
    id: String
    }
)

module.exports = reminderSchema