import copyImg from '../assets/images/copy.svg'

import '../styles/roomCode.scss'

type RoomCodeProps = {
  code: string
}

export const RoomCode = (props: RoomCodeProps) => {
  const copyCode = () => {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyCode}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}
