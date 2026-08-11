'use client'

import { useState, useCallback } from 'react'
import {
  Share2, X, MessageCircle, Facebook, Twitter, Link2, Check
} from 'lucide-react'

export interface ShareData {
  title: string
  text: string
  url: string
}

function ShareMenu({ data, onClose }: { data: ShareData; onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  const shareNative = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share(data)
        onClose()
        return
      } catch {
        // usuario canceló, continuar con fallback
      }
    }
  }, [data, onClose])

  const shareWhatsApp = useCallback(() => {
    const text = encodeURIComponent(`${data.title}\n\n${data.text}\n\n${data.url}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
    onClose()
  }, [data, onClose])

  const shareFacebook = useCallback(() => {
    const url = encodeURIComponent(data.url)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
    onClose()
  }, [data, onClose])

  const shareTwitter = useCallback(() => {
    const text = encodeURIComponent(`${data.title} — ${data.text}`)
    const url = encodeURIComponent(data.url)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
    onClose()
  }, [data, onClose])

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(data.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = data.url
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [data.url])

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-sm bg-[#1a1510] border border-[#d4af37]/30 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[#f5f0e6] font-bold text-base">Compartir</h3>
          <button onClick={onClose} className="text-[#a89b8c] hover:text-[#d4af37] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-[#a89b8c] mb-5 line-clamp-2">{data.title}</p>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={shareWhatsApp} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] hover:bg-[#25d366]/20 transition-colors text-sm font-medium">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </button>
          <button onClick={shareFacebook} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] hover:bg-[#1877f2]/20 transition-colors text-sm font-medium">
            <Facebook className="w-4 h-4" /> Facebook
          </button>
          <button onClick={shareTwitter} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] hover:bg-[#1da1f2]/20 transition-colors text-sm font-medium">
            <Twitter className="w-4 h-4" /> Twitter
          </button>
          <button onClick={copyLink} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors text-sm font-medium">
            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
            {copied ? 'Copiado' : 'Copiar link'}
          </button>
        </div>
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button onClick={shareNative} className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#d4af37] text-[#14100a] hover:bg-[#e9c65a] transition-colors text-sm font-bold">
            <Share2 className="w-4 h-4" /> Compartir desde el dispositivo
          </button>
        )}
      </div>
    </>
  )
}

export default function ShareButton({ data, small = false }: { data: ShareData; small?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`
          inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30
          text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors rounded-lg
          ${small ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm font-medium'}
        `}
      >
        <Share2 className={small ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
        Compartir
      </button>
      {open && <ShareMenu data={data} onClose={() => setOpen(false)} />}
    </>
  )
}