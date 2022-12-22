import { connect, set } from 'mongoose'

export default async function initalizeMongo () {
  try {
    set('strictQuery', false)
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected 🦆')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
