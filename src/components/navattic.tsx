'use client'

import Script from 'next/script'
const NavatticScript = () => {
  return (
    <Script
      id="navattic_script"
      src="/scripts/demo.js"
      // strategy="beforeInteractive"
    />
     //<script rel="preload" src="/scripts/demo.js"></script>
  )
}

export function NavatticJS() {
  return <NavatticScript />
}
