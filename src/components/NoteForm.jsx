import { useState } from 'react'
import { Send } from 'lucide-react'

export default function NoteForm({ onSubmit, loading }) {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onSubmit({ text: trimmed, author: author.trim() || undefined })
    setText('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-white/70 backdrop-blur border border-gray-200 rounded-xl p-4 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-2">Write a note</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What would you want the world to know?"
        className="w-full min-h-[100px] rounded-md border border-gray-300 focus:border-gray-400 focus:ring-0 p-3 text-gray-900 placeholder:text-gray-400"
        maxLength={1000}
      />
      <div className="mt-3 flex items-center gap-3">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name or alias (optional)"
          className="flex-1 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-0 p-2 text-gray-900 placeholder:text-gray-400"
          maxLength={80}
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          {loading ? 'Saving…' : 'Post'}
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-400">Notes are public and permanent. Keep it respectful. 1000 characters max.</p>
    </form>
  )
}
