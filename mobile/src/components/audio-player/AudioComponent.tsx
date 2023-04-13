import React, { memo }  from "react"
import Video from "react-native-video"

const AudioComponent = (props) => {
    return (
        <Video
          source={props.source}
          resizeMode={'contain'}
          muted={props.isVideoMuted}
          paused={props.paused}
          poster="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AA_black_image.jpg&psig=AOvVaw3vboiO3KtHKoV42QR1Un6D&ust=1675926310453000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCQhpWuhf0CFQAAAAAdAAAAABAE"
          audioOnly={true}
          onLoad={(data) => {
            props.onVideoLoad(data)}}
            repeat={false}
          onProgress={(value)=>props.memoizedHandleProgress(value,props.media.id, props.source)}
          ref={(ref:any) => props.videoRef(ref)}
          onEnd={()=>props.onVideoEnd(props.media)}
          onBuffer={props.onBuffer}
          onError={props.onError}
          style={{height: props.height}}
        />
    )
}
export default memo(AudioComponent);