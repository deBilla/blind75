import LangCategoryPage from './LangCategoryPage'
import { pythonCategories, pythonTopics, pythonCategoryTopics } from '../data/python'

export default function PythonCategoryPage() {
  return (
    <LangCategoryPage
      categories={pythonCategories}
      topics={pythonTopics}
      categoryTopics={pythonCategoryTopics}
      topicBasePath="/python-topic"
    />
  )
}
