import LangTopicPage from './LangTopicPage'
import { goTopics, goCategories } from '../data/go'

export default function GoTopicPage() {
  return (
    <LangTopicPage
      topics={goTopics}
      categories={goCategories}
      categoryBasePath="/go"
      lang="Go"
    />
  )
}
