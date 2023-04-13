import {useCallback, useEffect, useState} from 'react';
import {
  CameraRoll,
  cameraRollEventEmitter,
} from '@react-native-camera-roll/camera-roll';
import {GalleryLogic, GalleryOptions} from './Gallery.Interface';
import {AppState, EmitterSubscription, Platform} from 'react-native';
import { getMajorVersionIOS } from '../../common-helpers/GetMajorVersionIOS';
import { PlatformEnum } from '@sekeron/domain';

const isAboveIOS14 = () => {
  return getMajorVersionIOS() > 14;
};

export const useGallery = ({
  pageSize = 30,
  mimeTypeFilter,
  assetType
}: GalleryOptions): GalleryLogic => {
  const [isLoading, setIsLoading] = useState(false);
  const [isReloading, setIsReloading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [nextCursor, setNextCursor] = useState<string>();
  const [photos, setPhotos] = useState<any[]>();

  const loadNextPagePictures = useCallback(async () => {
    try {
      nextCursor ? setIsLoadingNextPage(true) : setIsLoading(true);
      const {edges, page_info} = await CameraRoll.getPhotos({
        first: pageSize,
        after: nextCursor,
        assetType: assetType,
        mimeTypes: mimeTypeFilter,
        // ...(isAndroid && { include: ['fileSize', 'filename'] }),
      });
      const photos = edges;
      setPhotos(prev => [...(prev ?? []), ...photos]);

      setNextCursor(page_info.end_cursor);
      setHasNextPage(page_info.has_next_page);
    } catch (error) {
      console.error('useGallery getPhotos error:', error);
    } finally {
      setIsLoading(false);
      setIsLoadingNextPage(false);
    }
  }, [mimeTypeFilter, nextCursor, pageSize]);

  const getUnloadedPictures = useCallback(async () => {
    try {
      setIsReloading(true);
      const {edges, page_info} = await CameraRoll.getPhotos({
        first: !photos || photos.length < pageSize ? pageSize : photos.length,
        assetType: assetType,
        mimeTypes: mimeTypeFilter,
        // Include fileSize only for android since it's causing performance issues on IOS.
        // ...(isAndroid && { include: ['fileSize', 'filename'] }),
      });
      const newPhotos = edges;
      setPhotos(newPhotos);

      setNextCursor(page_info.end_cursor);
      setHasNextPage(page_info.has_next_page);
    } catch (error) {
      console.error('useGallery getNewPhotos error:', error);
    } finally {
      setIsReloading(false);
    }
  }, [mimeTypeFilter, pageSize, photos]);

  useEffect(() => {
    if (!photos) {
      loadNextPagePictures();
    }
  }, [loadNextPagePictures, photos]);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (nextAppState === 'active') {
          getUnloadedPictures();
        }
      },
    );

    return () => {
      subscription.remove();
    };
  }, [getUnloadedPictures]);

  useEffect(() => {
    let subscription: EmitterSubscription;
    if (Platform.OS === PlatformEnum.ios && isAboveIOS14()) {
      subscription = cameraRollEventEmitter.addListener('onLibrarySelectionChange', (_event) => {
        getUnloadedPictures();
      });
    }

    return () => {
      if (Platform.OS === PlatformEnum.ios && isAboveIOS14() && subscription) {
        subscription.remove();
      }
    };
  }, [getUnloadedPictures]);

  return {
    photos,
    loadNextPagePictures,
    isLoading,
    isLoadingNextPage,
    isReloading,
    hasNextPage,
  };
};
