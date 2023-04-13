const getVideoDuration = (time: any) => {
  const videoDuration = (n: Number) => (n < 10 ? `0${n}` : `${n}`);
  const seconds = videoDuration(Math.floor(time % 60));// constants
  const minutes = videoDuration(Math.floor((time / 60) % 60));
  const hour = videoDuration(Math.floor((time / 3600) % 60));

  if (parseInt(hour) > 0) {
    return hour + ":" + minutes + ":" + seconds;
  } else {
    return minutes + ":" + seconds;
  };
};
export default getVideoDuration;

