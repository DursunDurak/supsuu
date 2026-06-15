'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [success, setSuccess]   = useState(false)

  const supabase = createClient()

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (password.length < 6) {
      setError('Şifre en az 6 karakter olmalı')
      setLoading(false)
      return
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, username },
        emailRedirectTo: 'https://supsuu.vercel.app/auth/callback',
      },
    })
    if (error) setError(error.message)
    else setSuccess(true)
    setLoading(false)
  }

  async function handleGoogleLogin() {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://supsuu.vercel.app/auth/callback',
      },
    })
    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-bg"><div className="orb orb-1" /><div className="orb orb-2" /></div>
        <div className="auth-box" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📬</div>
          <h2 className="auth-title">E-postanı kontrol et!</h2>
          <p className="auth-sub" style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: '#7dd87d' }}>{email}</strong> adresine doğrulama linki gönderdik.
          </p>
          <Link href="/login" className="btn-primary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', padding: '0.9rem', borderRadius: '12px' }}>
            Giriş sayfasına dön
          </Link>
        </div>
        <style>{styles}</style>
      </div>
    )
  }

  return (
    <div className="auth-page">
      <div className="auth-bg">
        <div className="orb orb-1" /><div className="orb orb-2" />
        <div className="grid-overlay" />
      </div>

      <div className="auth-box">
        <Link href="/" className="logo">supsuu</Link>
        <h1 className="auth-title">Topluluğa katıl</h1>
        <p className="auth-sub">Ücretsiz hesap oluştur, doğayı keşfet</p>

        <button className="btn-google" onClick={handleGoogleLogin} disabled={loading}>
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            <path fill="none" d="M0 0h48v48H0z"/>
          </svg>
          Google ile Kayıt Ol
        </button>

        <div className="divider"><span>veya</span></div>

        <form onSubmit={handleRegister} className="auth-form">
          {error && <div className="auth-error">⚠️ {error}</div>}

          <div className="field-row">
            <div className="field">
              <label>Ad Soyad</label>
              <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Ahmet Yılmaz" required />
            </div>
            <div className="field">
              <label>Kullanıcı Adı</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value.toLowerCase().replace(/\s/g, ''))} placeholder="ahmetyilmaz" required />
            </div>
          </div>

          <div className="field">
            <label>E-posta</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ornek@email.com" required />
          </div>

          <div className="field">
            <label>Şifre</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="En az 6 karakter" required />
            {password.length > 0 && (
              <div className="pw-strength">
                <div className={`pw-bar ${password.length >= 10 ? 'strong' : password.length >= 6 ? 'medium' : 'weak'}`} />
                <span>{password.length >= 10 ? 'Güçlü' : password.length >= 6 ? 'Orta' : 'Zayıf'}</span>
              </div>
            )}
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Hesap oluşturuluyor...' : 'Hesap Oluştur'}
          </button>

          <p className="terms">Kayıt olarak <a href="#">Kullanım Şartları</a>nı kabul etmiş olursun.</p>
        </form>

        <p className="auth-footer">Zaten hesabın var mı? <Link href="/login">Giriş yap</Link></p>
      </div>

      <style>{styles}</style>
    </div>
  )
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .auth-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; background: #0a0f0a; padding: 2rem; position: relative; overflow: hidden; }
  .auth-bg { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
  .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.2; }
  .orb-1 { width: 500px; height: 500px; background: #1a4d1a; top: -150px; left: -150px; }
  .orb-2 { width: 400px; height: 400px; background: #0d3d2d; bottom: -100px; right: -100px; }
  .grid-overlay { position: absolute; inset: 0; background-image: linear-gradient(rgba(125,216,125,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(125,216,125,0.03) 1px, transparent 1px); background-size: 60px 60px; }
  .auth-box { position: relative; z-index: 1; background: rgba(15,22,15,0.85); border: 1px solid rgba(125,216,125,0.12); backdrop-filter: blur(20px); border-radius: 24px; padding: 2.5rem; width: 100%; max-width: 460px; animation: fadeUp 0.5s ease both; }
  .logo { font-family: 'Fraunces', serif; font-size: 1.4rem; font-weight: 600; color: #7dd87d; text-decoration: none; display: block; margin-bottom: 1.75rem; }
  .auth-title { font-family: 'Fraunces', serif; font-size: 1.8rem; font-weight: 300; color: #e8f5e8; margin-bottom: 0.4rem; letter-spacing: -0.02em; }
  .auth-sub { color: #5a7a5a; font-size: 0.9rem; margin-bottom: 2rem; }
  .btn-google { width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.75rem; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: #d0e8d0; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; padding: 0.85rem; border-radius: 12px; cursor: pointer; transition: all 0.2s; }
  .btn-google:hover { background: rgba(255,255,255,0.1); }
  .btn-google:disabled { opacity: 0.5; cursor: not-allowed; }
  .divider { display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0; color: #2a4a2a; font-size: 0.8rem; }
  .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
  .auth-form { display: flex; flex-direction: column; gap: 1rem; }
  .auth-error { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: #fca5a5; padding: 0.75rem 1rem; border-radius: 10px; font-size: 0.85rem; }
  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
  .field { display: flex; flex-direction: column; gap: 0.4rem; }
  .field label { font-size: 0.82rem; font-weight: 500; color: #7a9a7a; }
  .field input { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: #e8f5e8; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; padding: 0.8rem 1rem; border-radius: 10px; outline: none; transition: all 0.2s; }
  .field input::placeholder { color: #2a4a2a; }
  .field input:focus { border-color: rgba(125,216,125,0.4); background: rgba(125,216,125,0.04); }
  .pw-strength { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.3rem; }
  .pw-bar { height: 3px; border-radius: 2px; flex: 1; transition: all 0.3s; }
  .pw-bar.weak { background: #ef4444; width: 33%; }
  .pw-bar.medium { background: #f59e0b; width: 66%; }
  .pw-bar.strong { background: #22c55e; width: 100%; }
  .pw-strength span { font-size: 0.75rem; color: #5a7a5a; }
  .btn-primary { width: 100%; background: #27a05b; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 500; padding: 0.9rem; border-radius: 12px; border: none; cursor: pointer; transition: all 0.2s; margin-top: 0.5rem; }
  .btn-primary:hover { background: #1e8049; }
  .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
  .terms { font-size: 0.78rem; color: #2a4a2a; text-align: center; }
  .terms a { color: #5a7a5a; }
  .auth-footer { text-align: center; font-size: 0.85rem; color: #3a5a3a; margin-top: 1.5rem; }
  .auth-footer a { color: #7dd87d; text-decoration: none; font-weight: 500; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
`