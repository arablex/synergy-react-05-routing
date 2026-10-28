import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import RedirectPage from './pages/RedirectPage'
import OpenClosePage from './pages/OpenClosePage'

// Корневой компонент: меню навигации + таблица маршрутов.
const App = () => {
  return (
    // Router даёт приложению доступ к адресной строке браузера (History API)
    <Router>
      <div className="app">
        {/* Меню переключения страниц (К4).
            NavLink — это Link, который сам добавляет класс "active" на текущей странице. */}
        <nav className="nav">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/redirect">Redirect</NavLink>
          <NavLink to="/open-close">Открыть/Закрыть</NavLink>
        </nav>

        {/* Routes выбирает ровно один Route, чей path совпал с текущим URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="/open-close" element={<OpenClosePage />} />
          {/* Любой другой адрес — возвращаем на понятную заглушку */}
          <Route path="*" element={<div className="page"><h1>404</h1><p>Такой страницы нет</p></div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
