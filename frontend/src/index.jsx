// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Survey from './pages/Survey'
// // import Header from './components/Header'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/survey" element={<Survey />}>
//           <Survey />
//         </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/survey/:questionNumber"
          element={<Survey />}
        ></Route>
        <Route exact path="/results" element={<Results />}></Route>
        <Route exact path="/freelances" element={<Freelances />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
