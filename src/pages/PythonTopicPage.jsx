import LangTopicPage from './LangTopicPage'
import { pythonTopics, pythonCategories } from '../data/python'

export default function PythonTopicPage() {
  return (
    <LangTopicPage
      topics={pythonTopics}
      categories={pythonCategories}
      categoryBasePath="/python"
      lang="Python"
    />
  )
}
