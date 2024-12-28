import express from 'express'
import * as diaryServices from '../services/diariosServices'
import toNewDiaryEntry from '../utils'

const diariosRouter = express.Router()

diariosRouter.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

diariosRouter.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))
  res.send(diary)
})

diariosRouter.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default diariosRouter
