import mongoose from 'mongoose'
import nconf from '../config'

mongoose.connect(nconf.get('db'))

const db = mongoose.connection

db.on('error', err => {
  console.error('connection error:', err.message)
})
db.once('open', () => {
    console.info('Connected to DB!')
})


export default mongoose