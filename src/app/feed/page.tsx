'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function FeedPage() {
  const [user, setUser] = useState<{ email?: string; user_metadata?: { full_name?: string; avatar_url?: string } } | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push('/login')
      } else {
        setUser(data.user)
        setLoading(false)
      }
    })
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0f0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#7dd87d', fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>Yükleniyor...</div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f0a', fontFamily: 'DM Sans, sans-serif', color: '#e8f5e8' }}>
      <nav style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '1rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(10,15,10,0.9)', backdropFilter: 'blur(16px)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <Link href="/" style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', fontWeight: 600, color: '#7dd87d', textDecoration: 'none' }}>
          supsuu
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#5a7a5a' }}>
            {user?.user_metadata?.full_name || user?.email}
          </span>
          <button
            onClick={handleLogout}
            style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#a0c0a0', fontSize: '0.85rem', padding: '0.5rem 1rem',
              borderRadius: '8px', cursor: 'pointer',
            }}
          >
            Çıkış
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: 600, margin: '4rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌲</div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', fontWeight: 300, color: '#e8f5e8', marginBottom: '0.75rem' }}>
          Hoş geldin{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ''}!
        </h1>
        <p style={{ color: '#5a7a5a', lineHeight: 1.7 }}>
          Feed sayfası yapım aşamasında. Yakında kamp yerleri, balık tutma noktaları ve daha fazlası burada olacak.
        </p>
      </div>
    </div>
  )
}
