export type CategoriaTarjeta =
  | 'parasha'
  | 'musar'
  | 'middot'
  | 'cabala'
  | 'festividad'
  | 'hebreo'
  | 'halaja'

export interface Tarjeta {
  id: number
  category: CategoriaTarjeta
  hebTitle: string
  latTitle: string
  title: string
  ref: string
  hebrewText: string
  translation: string
  analysis: string
  conclusion: string
  signature: string
}
