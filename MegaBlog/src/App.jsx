
import './App.css'

function App() {
  //process.env.REACT_APP_APPWRITE_URL - if created by create react app
  //import.meta.env.VITE_SOME_KEY - if created by vite
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1>Blog Apps</h1>
    </>
  )
}

export default App
