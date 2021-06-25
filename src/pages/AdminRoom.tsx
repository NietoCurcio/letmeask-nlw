import { useHistory, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'
import '../styles/room.scss'
import { RoomCode } from '../components/RoomCode'
// import { useAuth } from '../hooks/useAuth'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'
import { database } from '../services/firebase'
import { useEffect } from 'react'
import { Toggle } from '../components/Toggle'
import { useTheme } from '../hooks/useTheme'
import { LogoImg } from '../components/LogoImg'

type RoomParams = {
  id: string
}

export const AdminRoom = () => {
  // const { user } = useAuth()
  const history = useHistory()
  const params = useParams<RoomParams>()
  const roomId = params.id
  const { title, questions, authorId } = useRoom(roomId)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (authorId)
      if (authorId !== localStorage.getItem('userId')) history.push('/')
  }, [authorId, history])

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({ endedAt: new Date() })
    history.push('/')
  }

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Tem certeza que você deseja excluir essa pergunta?')) {
      const questionRef = database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .remove()
      await questionRef
    }
  }

  const handleCheckQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  const handleHighlighQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })
  }

  if (!authorId)
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )

  return (
    <div id="page-room" className={theme}>
      <header>
        <div className="content">
          <LogoImg />
          <div className="adminRoom">
            <RoomCode code={roomId} />
            <div>
              <Button isOutlined onClick={handleEndRoom}>
                Encerrar sala
              </Button>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestion(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlighQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Destacar pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  )
}
