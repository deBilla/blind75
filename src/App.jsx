import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProblemPage from './pages/ProblemPage'
import PythonHome from './pages/PythonHome'
import PythonCategoryPage from './pages/PythonCategoryPage'
import PythonTopicPage from './pages/PythonTopicPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/problem/:id" element={<ProblemPage />} />
        <Route path="/python" element={<PythonHome />} />
        <Route path="/python/:id" element={<PythonCategoryPage />} />
        <Route path="/python-topic/:id" element={<PythonTopicPage />} />
      </Routes>
    </>
  )
}
