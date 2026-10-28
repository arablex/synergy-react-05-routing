import React, { useState, useEffect } from 'react'

// Главная страница: показывает данные из глобальных объектов браузера
// (Date, navigator, window, событие mousemove) — критерий К1.
const Home = () => {
  // Текущее время — обновляется раз в секунду
  const [time, setTime] = useState(new Date())
  // Координаты курсора — обновляются на каждое движение мыши
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  // Размер вьюпорта храним в состоянии, чтобы он менялся при изменении окна
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    // Таймер для часов
    const interval = setInterval(() => setTime(new Date()), 1000)

    // Слушатель движения мыши по всему окну
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    // Слушатель изменения размера окна
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Очистка при уходе со страницы: иначе таймер и слушатели остались бы жить
    return () => {
      clearInterval(interval)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // getTimezoneOffset() возвращает минуты со знаком «наоборот»: для UTC+3 это -180,
  // поэтому делим на -60 и получаем привычное смещение в часах.
  const utcOffset = time.getTimezoneOffset() / -60
  const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone

  return (
    <div className="page">
      <h1>Добро пожаловать!</h1>
      <p>Дата: {time.toLocaleDateString()}</p>
      <p>
        Время: {time.toLocaleTimeString()} (UTC {utcOffset >= 0 ? '+' : ''}
        {utcOffset}, {timeZoneName})
      </p>
      <p>UserAgent: {navigator.userAgent}</p>
      <p>
        ViewPort: {viewport.width}x{viewport.height}, Плотность пикселей:{' '}
        {window.devicePixelRatio}
      </p>
      <p>
        Координаты курсора: X: {cursorPosition.x}, Y: {cursorPosition.y}
      </p>
    </div>
  )
}

export default Home
