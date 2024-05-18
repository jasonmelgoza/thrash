import React from 'react'
import { Theme } from '@radix-ui/themes'

import '../src/styles/reset.css'
import '../src/styles/theme.css'

export default function Frame({ children }) {
  return <Theme appearance="light" accentColor="green" grayColor="sage">{children}</Theme>
}
