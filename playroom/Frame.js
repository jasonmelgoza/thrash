import React from 'react'
import { Theme } from '@radix-ui/themes'

import '../src/styles/reset.css'
import '../src/styles/theme.css'

export default function Frame({ children }) {
  return <Theme accentColor="violet" radius="small" scaling="95%">{children}</Theme>
}
