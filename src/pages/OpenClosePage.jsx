import React, { useState } from 'react'

// Страница с кнопками «Открыть страницу» и «Закрыть страницу» — критерий К3.
const OpenClosePage = () => {
  // Текст из поля ввода (адрес, который надо открыть)
  const [url, setUrl] = useState('')

  // Открываем новую вкладку по введённому адресу
  const handleOpenPage = () => {
    const value = url.trim()
    if (value) {
      // Если пользователь забыл протокол, добавляем https://,
      // иначе браузер воспринял бы адрес как путь внутри нашего сайта
      const fullUrl = /^https?:\/\//i.test(value) ? value : `https://${value}`
      // "_blank" — новая вкладка; noopener — новая вкладка не получит доступ к нашему window
      window.open(fullUrl, '_blank', 'noopener')
    } else {
      alert('Введите URL!')
    }
  }

  // Закрываем текущее окно.
  // Важно: браузер разрешает window.close() только для окон, открытых скриптом
  // (через window.open). Для обычной вкладки вызов будет проигнорирован.
  const handleClosePage = () => {
    window.close()
  }

  return (
    <div className="page">
      <h1>Открыть/Закрыть страницу</h1>
      <div className="open-close-row">
        <input
          type="text"
          placeholder="Введите URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleOpenPage}>Открыть страницу</button>
      </div>
      <button className="danger" onClick={handleClosePage}>
        Закрыть страницу
      </button>
    </div>
  )
}

export default OpenClosePage
