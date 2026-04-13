import LangCategoryPage from './LangCategoryPage'
import { goCategories, goTopics, goCategoryTopics } from '../data/go'

export default function GoCategoryPage() {
  return (
    <LangCategoryPage
      categories={goCategories}
      topics={goTopics}
      categoryTopics={goCategoryTopics}
      topicBasePath="/go-topic"
    />
  )
}
