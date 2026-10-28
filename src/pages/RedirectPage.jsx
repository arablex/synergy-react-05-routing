import React from 'react'
import { useNavigate } from 'react-router-dom'

// Страница с кнопкой редиректа на главную — критерий К2.
const RedirectPage = () => {
  // useNavigate возвращает функцию для программного перехода между маршрутами
  const navigate = useNavigate()

  return (
    <div className="page">
      <h1>Страница Redirect</h1>
      <p>Нажмите кнопку, чтобы программно перейти на главную страницу.</p>
      {/* navigate("/") меняет URL без перезагрузки страницы */}
      <button onClick={() => navigate('/')}>Вернуться на главную</button>
    </div>
  )
}

export default RedirectPage
