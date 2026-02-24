import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

const rootele = createRoot(document.getElementById('root'))
if(rootele){
  rootele.render(
     <StrictMode>
    <App />
  </StrictMode>
  )
}
else{
  console.log("Error in root loading")
}

