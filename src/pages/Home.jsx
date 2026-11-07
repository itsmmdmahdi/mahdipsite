
import { useEffect, useState } from 'react'
import { Menu, Search, Instagram, Send, Sparkles } from 'lucide-react'

export default function Home() {
  const [date, setDate] = useState('')

  useEffect(() => {
    const updateDate = () => {
      setDate(
        new Intl.DateTimeFormat('fa-IR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          calendar: 'persian'
        }).format(new Date())
      )
    }

    updateDate()
    const timer = setInterval(updateDate, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="home-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="header">
        <a href="/" className="brand">mahdi<span>.</span></a>

        <div className="header-actions">
          <div className="date-capsule">{date}</div>
          <button className="icon-button" aria-label="جستجو">
            <Search size={19} />
          </button>
          <button className="icon-button" aria-label="منو">
            <Menu size={21} />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-label">
          <Sparkles size={15} />
          <span>PERSONAL SPACE</span>
        </div>

        <h1>سلام، به دنیای <span>Mahdi</span> خوش آمدی.</h1>

        <p>
          مجموعه‌ای از ایده‌ها، تجربه‌ها، پروژه‌ها و چیزهایی
          که دوست دارم با دیگران به اشتراک بگذارم.
        </p>

        <div className="hero-links">
          <a href="#daily">کشف دنیای امروز</a>
          <a href="#social">ارتباط با من</a>
        </div>
      </section>

      <section className="content-placeholder" id="daily">
        <span className="section-tag">DAILY DISCOVERY</span>
        <h2>هر روز، یک چیز جدید برای دانستن.</h2>
        <p>اطلاعات عمومی روز به‌زودی اینجا قرار می‌گیرد.</p>
      </section>

      <footer className="footer" id="social">
        <div className="footer-brand">mahdi.</div>

        <div className="social-links">
          <a href="https://instagram.com/itsmmdmahdi"
             target="_blank" rel="noreferrer">
            <Instagram size={18} />
            Instagram
          </a>

          <a href="https://t.me/itsmmdmahdi"
             target="_blank" rel="noreferrer">
            <Send size={18} />
            Telegram
          </a>
        </div>

        <p>© {new Date().getFullYear()} Mahdi. All rights reserved.</p>
      </footer>
    </main>
  )
}

