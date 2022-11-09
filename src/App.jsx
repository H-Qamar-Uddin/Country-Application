import React, { useState } from 'react'
import NavBar from './components/NavBar'
import RegionPicker from './components/RegionPicker'
import Countries from './components/Countries'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { darkTheme } from './themes/dark'
import { lightTheme } from './themes/light'

export const ThemeContext = React.createContext({
  // theme: 'dark',
  setTheme: () => console.log(''),
})
const App = () => {
  const [mode, setMode] = React.useState('dark')

  const handleSwitchTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const theme = React.useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode]
  )

  const [selectedRegion, setSelectedRegion] = useState(null)
  const onRegionPickHandler = (region) => {
    setSelectedRegion(region)
  }
  const clearSelectedRegionHandler = () => {
    setSelectedRegion(null)
  }
  return (
    <ThemeContext.Provider value={{ setTheme: handleSwitchTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <>
          <NavBar />
          {selectedRegion ? (
            <Countries
              clearSelectedRegionHandler={clearSelectedRegionHandler}
              selectedRegion={selectedRegion}
            />
          ) : (
            <RegionPicker onRegionPickHandler={onRegionPickHandler} />
          )}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
export default App
