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
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Container, Content, Details, Navigation, PostInfo } from './styles'
interface IssueResponseProps {
  body: string
  title: string
  comments: number
  user: string
  created_at: string
  html_url: string
}

export function Post() {
  const [post, setPost] = useState<IssueResponseProps>({} as IssueResponseProps)
  const navigate = useNavigate()
  const { postId } = useParams()
  console.log(postId)
  function publishedDateRelativeToNow(date: string) {
    return formatDistanceToNow(parseISO(date), {
      locale: ptBR,
      addSuffix: true,
    })
  }

  useEffect(() => {
    if (!postId) {
      navigate('/')
    }
    const loadPostData = async (id?: string) => {
      try {
        const response = await api.get(
          `repos/joelsondiasti/03-github-blog/issues/${id}`,
        )
        setPost({
          ...response.data,
          user: response.data.user.login,
          created_at: publishedDateRelativeToNow(response.data.created_at),
        })
      } catch (e) {
        alert(e)
      }
    }

    loadPostData(postId)
  }, [postId, navigate])

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
                <span>{post.user}</span>
              </div>
              <div>
                <FaCalendarDay />

                <span>{post.created_at}</span>
              </div>
              <div>
                <FaComment />
                <span>
                  {post.comments === 1
                    ? `${post.comments} comentário`
                    : `${post.comments} comentários`}
                </span>
              </div>
            </Details>
          </PostInfo>

          <Content>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </Content>
        </>
      )}
    </Container>
  )
}
