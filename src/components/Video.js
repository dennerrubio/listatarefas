import VideoBG from '../assets/waves.mp4';

export default function Video() {
  return(
    <video
    className="fixed left-0 top-0 w-full h-[450px] object-cover -z-10"
    autoPlay
    loop
    muted
  >
    <source src={VideoBG} type="video/mp4" />
  </video>
  )
}
