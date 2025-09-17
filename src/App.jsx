import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>CICD JENKINS DEMO</h1>
        <p>Jenkins source code uses Git repo and branch /main.in <strong>BUILD Triggers,</strong> select Poll SCM and use schedule: * * * * *</p>
        <h3>In BUild Steps , add Windows batch command: </h3>
        <p>call npm install</p>
        <p>call npm run build</p>
        <p></p>
        <p></p>
        <p></p>
        <p>mdir /S /Q "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</p>
      <p>mkdir "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</p>
      <p>xcopy /E /I /Y dist\* "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</p>
      <h4>Another  <strong>Build Step</strong> with<strong>Windows batch command</strong>  to restart Tomacat:</h4>
      <p>net stop Tomcat9</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
