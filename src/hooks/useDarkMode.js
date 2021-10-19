import useLocalStorage from "./useLocalStorage"


const useDarkMode = (value) => {
  const [mode, setMode] = useLocalStorage('dark', value)

  return [mode, setMode]
}

export default useDarkMode