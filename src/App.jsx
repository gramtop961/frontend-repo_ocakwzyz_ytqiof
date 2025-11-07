import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'
import Footer from './components/Footer'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [posting, setPosting] = useState(false)

  const fetchNotes = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_BASE}/notes`)
      const data = await res.json()
      setNotes(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (payload) => {
    try {
      setPosting(true)
      await fetch(`${API_BASE}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      await fetchNotes()
    } catch (e) {
      console.error(e)
    } finally {
      setPosting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50">
      <div className="px-4 sm:px-6">
        <Header />
        <NoteForm onSubmit={handleSubmit} loading={posting} />
        <NotesList notes={notes} onRefresh={fetchNotes} loading={loading} />
        <Footer />
      </div>
    </div>
  )
}
