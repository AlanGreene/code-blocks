export interface PartCode {
  type: 'code'
  language: string
  content: string
}

export interface PartOther {
  type: 'other'
  content: string
}

export type Part = PartCode | PartOther

export const isPartCode = (part: Part): part is PartCode =>
  part.type === 'code' && Boolean(part.language)

export const isPartOther = (part: Part): part is PartOther =>
  part.type === 'other'

export const isPart = (d: any): d is Part =>
  d && d.type && d.content && (isPartCode(d) || isPartOther(d))

export type LanguagesToParse = string[] | '*'

export const parseAllLanguages = (d: LanguagesToParse): d is '*' =>
  d === '*'

export interface DsvDataItem {
  [key: string]: boolean | number | string
}

export interface Meta {
  [key: string]: any
}

export type Renderer = (languages: LanguagesToParse) =>
  (part: Part) => Promise<Part>
