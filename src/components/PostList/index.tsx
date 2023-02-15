import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'
import { IssueProps } from '../../pages/Home'
import { PostItem, PostsContainer } from './styles'
interface PostListProps {
  issues: IssueProps[]
}

export function PostList({ issues }: PostListProps) {
  console.log(issues)
  const navigate = useNavigate()
  const publishedDateRelativeToNow = (date: string) => {
    return formatDistanceToNowStrict(parseISO(date), {
      locale: ptBR,
      addSuffix: true,
    })
  }

  const handlePostItemClick = (issue: number) => {
    navigate(`/post/${issue}`)
  }

  return (
    <PostsContainer>
      {issues.map((issue) => (
        <PostItem
          key={issue.number}
          onClick={() => handlePostItemClick(issue.number)}
        >
          <header>
            <h1>{issue.title}</h1>
            <span>{publishedDateRelativeToNow(issue.created_at)}</span>
          </header>
          <p>
            {issue.body.split('.', 4)[0]}.{issue.body.split('.', 4)[1]}...{' '}
          </p>
        </PostItem>
      ))}
    </PostsContainer>
  )
}
