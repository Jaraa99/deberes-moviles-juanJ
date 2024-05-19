import './App.css';
import { useState } from 'react';
import anime from './model/anime.json';
import series from './model/series.json';
import peliculas from './model/peliculas.json';
import { Anime } from './components/Anime';
import { Series } from './components/Series';
import { Peliculas } from './components/Peliculas';
import { Main } from './components/Main';
import { Detalle } from './components/Detalle';
import {buscador} from './controller/buscador';
import { Formulario } from './components/Formulario';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [listaPeliculas, setListaPeliculas] = useState(peliculas);

  const [listaSeries, setListaSeries] = useState(series);

  const [listaAnime, setListaAnime] = useState(anime);

  const [validaLayout, setValidaLayout] = useState(false);

  const listaElementos = {
    peliculas,
    setListaPeliculas,
    series,
    setListaSeries,
    anime,
    setListaAnime
  }

  return (
    <BrowserRouter>
      <div className={validaLayout ? "layout-hidden" : "layout"}>
        <header className="header">
          <div className="container_logo">
            <i className="bi bi-camera-reels-fill camera-logo"></i>
            <h1 className="title-logo">Peliculas</h1>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <i className="bi bi-house-fill"></i>
                <Link to="/">Inicio</Link>
              </li>

              <li>
                <i className="bi bi-camera-video-fill"></i>
                <Link to="/peliculas" onClick={()=>setValidaLayout(true)}>Películas</Link>
              </li>

              <li>
                <i className="bi bi-tv-fill"></i>
                <Link to="/series" onClick={()=>setValidaLayout(true)}>Series</Link>
              </li>

              <li>
                <i className="bi bi-eye-fill"></i>
                <Link to="/anime" onClick={()=>setValidaLayout(true)}>Anime</Link>
              </li>

              <li className="container-search">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Buscar película" onChange={(e) => buscador(e,listaElementos)}/>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path='/' element={<Main listaPeliculas={listaPeliculas} listaSeries={listaSeries} listaAnime={listaAnime} setValidaLayout={setValidaLayout}/>} />

            <Route path='/peliculas' element={<Peliculas listaPeliculas={listaPeliculas}/>}/>

            <Route path='/series' element={<Series listaSeries={listaSeries}/>}/>

            <Route path="/anime" element={<Anime listaAnime={listaAnime}/>}/>

            <Route path='/detalle/:tipo/:id' element={<Detalle setValidaLayout={setValidaLayout}/>} />
          </Routes>
        </main>

        <section className={validaLayout ? "form-hidden" : "form"}>
          <div className="container_form">
            <h3 className="title-form">Crear un Productos</h3>
            <Formulario setListaPeliculas={setListaPeliculas} setListaSeries={setListaSeries} setListaAnime={setListaAnime} />
          </div>
        </section>

        <footer className="footer">
          <p className="footer-copy">
        &copy; Juan Carlos Jara| 2024
          </p>

          
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;