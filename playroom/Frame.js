import React from 'react'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

export default function Frame({ children }) {
  return <Theme>{children}</Theme>
}
