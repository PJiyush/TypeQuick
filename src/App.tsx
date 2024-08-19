import './App.css'
import { ThemeContext } from './context/ThemeContext';
import Home from './components/Home';
import { useThemeValue } from './hooks/useThemeValue';
function App() {
  const theme=useThemeValue()
  return (
    <ThemeContext.Provider value={theme}>
      <Home/>
    </ThemeContext.Provider>
  )
}

export default App
