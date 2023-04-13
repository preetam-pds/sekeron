import ImageAssets from "src/assets";
import { MediaTypeEum } from '@sekeron/domain';

export const CreatePostMedia = [
    { id: 1, icon: ImageAssets.ic_camera_inactive, activeIcon: ImageAssets.ic_camera_active, mediaType: MediaTypeEum.image },
    { id: 2, icon: ImageAssets.ic_audio_inactive, activeIcon: ImageAssets.ic_audio_active, mediaType: MediaTypeEum.voice },
    { id: 3, icon: ImageAssets.ic_video_inactive, activeIcon: ImageAssets.ic_video_active, mediaType: MediaTypeEum.video },
    { id: 4, icon: ImageAssets.ic_text_inactive, activeIcon: ImageAssets.ic_text_active, mediaType: MediaTypeEum.text },
];
