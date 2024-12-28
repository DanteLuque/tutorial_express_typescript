/*
Asi como existen los tipos primitivos (number, string, otros), tambien podemos definir nuestros propios tipos.

Al momento de crear tipado "type", podemos definir los valores que pueden admitir dicho tipos
*/

// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

/*
Una interface es un contrato que funciona como plantilla para definir la estructura, tipos y prioridad que deberian tener un objeto.
*/

import { Weather, Visibility } from './enum'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// obteniendo un type con toda la estructura de la interface DiaryEntry pero sin el comment
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'|'date'|'weather'|'visibility'>;

// otra forma de hacer esto es usando Omit, por si la interface tiene demasiados campos
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>
