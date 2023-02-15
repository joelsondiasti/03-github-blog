import { formatDistanceToNow, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Container, Content, Details, Navigation, PostInfo } from './styles'
interface IssueResponseProps {
  body: string
  title: string
  comments: number
  user: {
    login: string
  }
  created_at: string
  html_url: string
}

export function Post() {
  const [post, setPost] = useState<IssueResponseProps>({} as IssueResponseProps)
  const navigate = useNavigate()
  const { postId } = useParams()

  useEffect(() => {
    if (!postId) {
      navigate('/')
    }
    const loadPostData = async () => {
      const response = await api.get<IssueResponseProps>(
        `repos/joelsondiasti/03-github-blog/issues/${postId}`,
      )
      setPost(response.data)
    }

    loadPostData()
  }, [postId, navigate])

  function publishedDateRelativeToNow(date: string){
    return formatDistanceToNow(parseISO(date), {
      locale: ptBR,
      addSuffix: true,
    })
  }

  function handleBackToPreviusClick() {
    navigate('/')
  }

  console.log(post)
  return (
    <Container>
      {post && (
        <>
          <PostInfo>
            <Navigation>
              <a onClick={() => handleBackToPreviusClick()}>
                <FaChevronLeft size={12} />
                <span>Voltar</span>
              </a>
              <a href={post.html_url}>
                <span>Ver no github</span>
                <FaExternalLinkAlt size={12} />
              </a>
            </Navigation>
            <h1>{post.title}</h1>
            <Details>
              <div>
                <FaGithub />
                <span>{''}</span>
              </div>
              <div>
                <FaCalendarDay />
                <span>{publishedDateRelativeToNow(post.created_at)}</span>
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
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types:
            </p>
          </Content>
        </>
      )}
    </Container>
  )
}
