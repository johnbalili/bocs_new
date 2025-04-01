'use client'

import Example from './price'
import { Container } from '@/components/container-gray'
import { Navbar } from '@/components/navbar-gray'

export default function Pricing() {

  return (
    <main className="overflow-hidden">
      {/* <GradientBackground /> */}
      <Container>
        <Navbar/>
      </Container>
      <Example/>
      {/* <Footer /> */}
    </main>
  )
}