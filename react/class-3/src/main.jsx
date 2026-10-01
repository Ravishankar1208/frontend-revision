import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Touris from "./Touris.jsx";
import Button from "./Button.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Touris van = "hira bus" tourist = "82"/>
    <Button name = "Click Me"/>
    <Button name = "buy now"/>


  </StrictMode>,
)

