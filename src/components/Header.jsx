import { Globe, Heart } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto text-center mb-10">
      <div className="flex items-center justify-center gap-2 text-pink-600 mb-3">
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium tracking-wide">a world archive of last words</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
        if i die.
      </h1>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Leave a note for the world. Read what others have written. No accounts, no paywalls — just words that matter.
      </p>
      <div className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-1">
        <Heart className="w-3.5 h-3.5" />
        <span>be kind • be respectful</span>
      </div>
    </header>
  )
}
