import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "src/styles/theme"

export function wrappeWithThemeProvider(node) {
  return <ThemeProvider theme={theme}>{node}</ThemeProvider>
}
