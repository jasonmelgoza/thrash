import React from 'react'
import { Theme } from '@radix-ui/themes'

// Import styles
import '../src/styles/reset.css'
import '../src/styles/theme.css'

export default function Frame({ theme, children }) {
  // Check if theme is defined, if document is accessible (not in server-side rendering or similar environments),
  // if theme has an 'appearance' property, and if the value of 'appearance' is either 'light' or 'dark'
  if (
    theme &&
    typeof document !== 'undefined' &&
    theme.appearance &&
    ['light', 'dark'].includes(theme.appearance)
  ) {
    // If the document's classList doesn't already contain the current theme's appearance,
    // remove 'light' and 'dark' classes, set the color scheme to the current theme's appearance,
    // and add the current theme's appearance to the classList
    if (!document.documentElement.classList.contains(theme.appearance)) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.style.colorScheme = theme.appearance
      document.documentElement.classList.add(theme.appearance)
    }
  }
  // Render the Theme, passing all properties of the 'theme' object to it
  return (
    <Theme {...theme}>
      {children}
    </Theme>
  )
}
