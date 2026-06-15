'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) {
          router.push('/login?error=' + error.message)
        } else {
          router.push('/feed')
        }
      })
    } else {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          router.push('/feed')
        } else {
          router.push('/login?error=no_session')
        }
      })
    }
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0f0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <div style={{
        width: 40, height: 40, border: '3px solid rgba(125,216,125,0.2)',
        borderTop: '3px solid #7dd87d', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <p style={{ color: '#7dd87d', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem' }}>
        Giriş yapılıyor...
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
