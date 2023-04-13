interface IMediaContent {
  mediaType: string
  publicUrl: string
  backgroundColor?: string
}

interface ISelectedArtists {
  id: number
  name: string
  revenueShare: any
}

interface IArtists {
  numberOfArtisRequired: number
  artistType: string
  id: number
  selectedArtists: ISelectedArtists[]
  projectRequirements: any[]
}

export interface IUploadPostState {
  isLoading: boolean
  error: string
  success: string
  artistData: any
  basicInfoErrors: any
  previousBackgroundColor: string
  textCardBackgroundColor: string
  projectDetails: {
    coverImage: string
    basicInfo: {
      projectName: string
      category: string
      ownershipType: string
      revenueShareType: string
      startDate: any
      endDate: any
      description: string
      offline: boolean
      online: boolean
      adress: string
    }
    mediaContent: IMediaContent[]
    collaborators: {
      totalNumberOfRequiredArtist: number
      artists: IArtists[]
    }
  }
}
