/* eslint-disable jsx-a11y/media-has-caption */
import { useRef } from 'react'

const SoundEffect = () => {
  const audioRef = useRef(null)

  const handlePlay = () => {
    audioRef.current.play()
  }

  return (
    <div>
      <audio ref={audioRef}>
        <source src="../../src/1.wav" type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>
      <button onClick={handlePlay}>Play Sound</button>
    </div>
  )
}

export default SoundEffect
