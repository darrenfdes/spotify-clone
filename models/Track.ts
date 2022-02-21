interface IMeta {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

interface Track extends IMeta {
  album: Album
  artists: Artists[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  episode: boolean
  explicit: boolean
  external_ids: {
    isrc: string
  }
  is_local: boolean
  popularity: number
  preview_url?: string
}

interface Album extends IMeta {
  album_type: string
  artists: Artists[]
  available_markets: string[]

  images: {
    height: number
    width: number
    url: string
  }[]
  release_date: string
  release_date_precision: string
  total_tracks: 60
  type: string
  uri: string
}

interface Artists extends IMeta {}

export default Track
