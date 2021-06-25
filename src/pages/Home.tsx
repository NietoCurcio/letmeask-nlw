import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { FormEvent } from 'react'
import { useState } from 'react'
import { database } from '../services/firebase'
import { useTheme } from '../hooks/useTheme'
import { LogoImg } from '../components/LogoImg'
import { Toggle } from '../components/Toggle'

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')
  const { theme, toggleTheme } = useTheme()

  const handleCreateRoom = async (e: FormEvent) => {
    try {
      if (!user) await signInWithGoogle()

      history.push('/rooms/new')
    } catch (err) {
      console.log(err)
      console.log('Could not sign in user: ', err.message)
    }
  }

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (!roomCode.trim()) return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()
    if (!roomRef.exists()) {
      alert('Room does not exists')
      return
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed')
      return
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <div id="page-auth" className={theme}>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <LogoImg />
          <button onClick={(e) => handleCreateRoom(e)} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </main>
    </div>
  )
}
