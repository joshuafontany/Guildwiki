import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

import type { Wikis } from '$routes/wikis/lib/wikis'

export enum AREAS {
  PUBLIC = 'Public',
  PRIVATE = 'Private'
}

export const wikisStore: Writable<Wikis> = writable({
  loading: true,
  publicWikis: [],
  privateWikis: [],
  selectedArea: AREAS.PUBLIC,
})
