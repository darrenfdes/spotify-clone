interface IPlayList {
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: {
    height: number
    width: number
    url: string
  }[]
  name: string
  owner: IOwner
  primary_color?: string
  public: true
  snapshot_id: string
  tracks: ITrack[]
  type: string
  uri: string
}

interface IOwner {
  display_name: string
  external_urls: any //check this
  href: string
  id: string
  type: string
  uri: string
}

interface ITrack {
  href: string
  total: number
}

export default IPlayList
