import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Loader, Navbar } from './components'
import { Animes, DetailsAnime } from './routes'
import './App.css'


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='container mx-auto'>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Animes />} />
            <Route path='animes/:id' element={<DetailsAnime />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
