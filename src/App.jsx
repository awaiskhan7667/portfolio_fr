import Home from './pages/Home'
import { ThemeProvider } from './context/ThemeContext'


const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
