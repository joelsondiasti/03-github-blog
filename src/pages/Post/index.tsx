import { useEffect } from 'react'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Content, Details, Navigation, PostInfo } from './styles'
export function Post() {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      // alert('No State')
      // navigate('/')
    }
  }, [state, navigate])

  function handleBackToPreviusClick() {
    navigate('/')
  }

  return (
    <Container>
      <PostInfo>
        <Navigation>
          <a onClick={() => handleBackToPreviusClick()}>
            <FaChevronLeft size={12} />
            <span>Voltar</span>
          </a>
          <a href="">
            <span>Ver no github</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </Navigation>
        <h1>JavaScript data types and data structures</h1>
        <Details>
          <div>
            <FaGithub />
            <span>joelsondiasti</span>
          </div>
          <div>
            <FaCalendarDay />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FaComment />
            <span>5 comentários</span>
          </div>
        </Details>
      </PostInfo>

      <Content>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </Content>
    </Container>
  )
}
