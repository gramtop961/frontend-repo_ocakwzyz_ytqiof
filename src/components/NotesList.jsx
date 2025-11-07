import { useEffect } from 'react'
import { Quote } from 'lucide-react'

export default function NotesList({ notes, onRefresh, loading }) {
  useEffect(() => {
    onRefresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="w-full max-w-3xl mx-auto mt-8">
      <div className="flex items-center gap-2 mb-3 text-gray-700">
        <Quote className="w-4 h-4" />
        <h2 className="text-sm font-semibold uppercase tracking-wide">View notes</h2>
      </div>
      {loading && (
        <div className="text-sm text-gray-500">Loading notes…</div>
      )}
      <ul className="space-y-3">
        {notes.map((n) => (
          <li key={n.id} className="bg-white/70 backdrop-blur border border-gray-200 rounded-xl p-4">
            <p className="text-gray-900 whitespace-pre-wrap">{n.text}</p>
            <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
              <span>— {n.author || 'someone'}</span>
              {n.created_at && (
                <time dateTime={n.created_at}>
                  {new Date(n.created_at).toLocaleString()}
                </time>
              )}
            </div>
          </li>
        ))}
        {notes.length === 0 && !loading && (
          <li className="text-sm text-gray-500">No notes yet. Be the first to write one.</li>
        )}
      </ul>
    </section>
  )}
