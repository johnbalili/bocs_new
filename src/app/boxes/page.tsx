'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, FingerPrintIcon, Cog6ToothIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Industries } from '@/components/industries'
import { Testimonials } from '@/components/testimonials'
import BOCSDemo from '@/screenshots/Bocs_Demo.png'


function Bundles(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        {/* <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav> */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-1 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Create Subscription Box Experiences That Drive Retention
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Whether curated or fully customisable, Bocs gives you full control of building and styling your subscription boxes.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="App screenshot"
                  src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}

function BundleTypes(){
  const cards = [
    {
      name: 'Curated Boxes',
      description: 'Combine best-sellers or complementary products into ready-to-go boxes that simplify the decision-making process for your customers and boost your sales.',
      icon: PhoneIcon,
    },
    {
      name: 'Custom Boxes',
      description: 'Offer a build-your-own-box experience where customers can mix and match products from your store. Give them control while you increase average order value.',
      icon: LifebuoyIcon,
    },
    {
      name: 'Collections',
      description: 'Combine bundles into collections offering greater choice in your signup flow. Perfect for Wine Clubs featuring packs by quantity or food boxes offering meat, seafood, or vegetarian options.',
      icon:NewspaperIcon,
    },
  ]

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Sell More Boxes</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
          Create and Deploy Subscription Boxes Built for High Conversions
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              {/* <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" /> */}
              <div className="text-base/7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StartTrial(){
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Ready to dive in? <br />
          Create a free account today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="https://v2.bocs.io/login"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a> */}
        </div>
      </div>
    </div>
  )
}

function EngineRoom(){
  const features = [
    {
      name: 'Layouts.',
      description:
        'Select a visual layout of the sign up flow that best matches your brand and industry. Adjust each widget component to your liking.',
      href: '#',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Style.',
      description:
        'Adjust the styling of the sign up flow to match your brand 100% adjustable styling (coming soon).',
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Frequencies.',
      description:
        'Set unlimited frequency options per box and provide more options to suit your subscribers.',
      href: '#',
      icon: ArrowPathIcon,
    },
    {
      name: 'Discounts.',
      description:
        'For each frequency, set a discount either dollar value or percentage. The more frequent, the better the discount.',
      href: '#',
      icon: FingerPrintIcon,
    },
    {
      name: 'Products.',
      description:
        'For each box, you can set products. Create different boxes with different products such as Meat, Seafood or Vegetarian. ',
      href: '#',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Preview.',
      description:
        'Check the preview of your sign up flow before you publish onto your website.',
      href: '#',
      icon: ServerIcon,
    },
  ]
  return (
    <>
    <div className="bg-gray-900">
      <div className="mx-auto py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg> */}
          <div className="m-auto max-w-[40rem] text-center lg:m-auto lg:pt-32 lg:pb-24 lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 mb-5">Bocs Widget</h2>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your Subscription Box Engine Room
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
            The Bocs Widget simplifies subscription box management by handling both the structure and style of your box sign-up process. Set frequencies, discounts, and product options effortlessly, while customising the widget's design to match your brand.
            </p>
          </div>
          {/* <div className="relative mt-16 h-[14rem] lg:h-[58vh] lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-full max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div> */}
          <div className="has-overlay relative text-center mb-16 mx-auto max-w-7xl px-6 lg:px-8 no-gradient">
          {/* <iframe src="https://capture.navattic.com/cm2895j8t000003mfae4999ls" className="border-none w-full h-full min-h-screen" allow="fullscreen" data-navattic-demo-id="cm2895j8t000003mfae4999ls"></iframe> */}
          {/* <iframe src="https://capture.navattic.com/cm2895j8t000003mfae4999ls" className="full-width-widget min-h-screen" allow="fullscreen" data-navattic-demo-id="cm2895j8t000003mfae4999ls"></iframe> */}
          
          <button id='demo' className='z-50 -translate-x-1/2 absolute top-2/4 left-2/4 w-fit mx-auto min-w-36 bg-amber-700 group inline-flex items-center justify-center rounded-full py-2 px-4 text-lg font-semibold focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900'>
              <span>
              Try our Bocs Demo
              </span>
            </button>
          <img
            alt="App screenshot"
            src={BOCSDemo.src}
            width={2432}
            height={1442}
            className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 pb-24 sm:pb-32">
      <div className="mx-auto px-6 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-start gap-x-3 text-base/7 font-semibold text-white">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600 mt-1" />
                  <div>
                  <p className='text-white'>{feature.name} <span className='text-gray-600'>{feature.description}</span></p>
                  
                  </div>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}

function Collections(){
  return (
    <>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600 mb-1">Bocs Widget</h2>
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight mb-5 text-gray-900 sm:text-5xl">
          Collections
        </h2>
        <p className='max-w-lg text-gray-600'>Create dynamic subscription experiences by grouping boxes into tailored collections. Perfect for wine clubs, nutrition kits, cocktail clubs and more. </p>
      </div>
    </div>
    <div className="overflow-hidden bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mt-16 aspect-2432/1442 h-[36rem] sm:h-auto sm:w-[calc(var(--container-7xl)-calc(var(--spacing)*16))]">
          <div className="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] shadow-xs ring-1 ring-black/5" />
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
            className="h-full rounded-xl shadow-2xl ring-1 ring-black/10"
          />
        </div>
      </div>
    </div>
  </>
  )
}

export default function Pricing() {

  return (
    <main className="overflow-hidden">
      {/* <GradientBackground /> */}
      <Container>
        <Navbar />
      </Container>
      <Bundles/>
      <BundleTypes/>
      <StartTrial/>
      <EngineRoom/>
      <Collections/>
      <Testimonials/>
      <Footer />
      {/* <Footer /> */}
    </main>
  )
}
