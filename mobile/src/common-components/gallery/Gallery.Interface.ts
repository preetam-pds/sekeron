import { AssetType } from "@react-native-camera-roll/camera-roll";

export interface GalleryOptions {
    pageSize: number;
    mimeTypeFilter?: Array<string>;
    assetType: AssetType
  }
  
export interface GalleryLogic {
    photos?: any[];
    loadNextPagePictures: () => void;
    isLoading: boolean;
    isLoadingNextPage: boolean;
    isReloading: boolean;
    hasNextPage: boolean;
  }