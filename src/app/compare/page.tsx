import { Container } from '@/components/container'
import { TabbedCompare } from '@/components/TabbedCompare'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'

export default function Compare() {
  return (
    <main className="overflow-hidden">
        <Container>
            <Navbar />
        </Container>
        <section
        id="features"
        aria-labelledby="features-title"
        className="scroll-mt-14 py-8 sm:scroll-mt-16 sm:py-20 lg:py-16"
        >
        <Container>
                <TabbedCompare />
        </Container>
        <Testimonials/>
        <Footer/>
        </section>
    </main>

  )
}
