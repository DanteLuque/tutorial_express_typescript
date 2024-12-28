import { DiaryEntry, NonSensitiveInfoDiaryEntry, newDiaryEntry } from '../types'
import diaryData from './diarios.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry !== null) {
    const { comment, ...rest } = entry as DiaryEntry
    return rest
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(
    ({ comment, ...rest }: DiaryEntry) => rest
  )
}

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1, // obteniendo la id máxima y sumandole 1
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
