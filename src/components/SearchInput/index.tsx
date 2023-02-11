import { SearchContainer } from './styles'

export function SearchInput() {
  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações </span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
