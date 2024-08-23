import './App.css'
import { ThemeContext } from './context/ThemeContext';
import Home from './components/Home';
import { useThemeValue } from './hooks/useThemeValue';
import { useStartValue } from './hooks/useStart';
import { StartContext } from './context/StartContext';
function App() {
  const theme=useThemeValue();
  const start = useStartValue();
  return (
    <ThemeContext.Provider value={theme}>
      <StartContext.Provider value={start}>
        <Home/>
      </StartContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
