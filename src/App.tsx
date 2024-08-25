import './App.css'
import { ThemeContext } from './context/ThemeContext';
import Home from './components/Home';
import { useThemeValue } from './hooks/useThemeValue';
import { useStartValue } from './hooks/useStart';
import { StartContext } from './context/StartContext';
import { useStorage } from './hooks/useStorage';
import { StorageContext } from './context/StorageContext';
function App() {
  const theme=useThemeValue();
  const start = useStartValue();
  const store = useStorage('TypeQuick');
  return (
    <ThemeContext.Provider value={theme}>
      <StartContext.Provider value={start}>
        <StorageContext.Provider value={store}>
          <Home />
        </StorageContext.Provider>
      </StartContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
