import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative min-h-screen">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset min-h-screen" />
      <Container className="relative">
        <Navbar/>
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-[100px] max-w-[1100px] md:leading-[100px]">
          Build Recurring Revenue with Flexible Subscription Boxes
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
          Design custom programs, offer flexible customer options, and manage subscriptions effortlessly—no developer required.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://v2.bocs.io/login">Get started</Button>
            <Button variant="secondary" href=" https://book.bocs.io/#/CatchUp">
              Book a Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Problem() {
  const features = [
    {
      name: 'Smooth, Simple, Built for Growth',
      description:
        "Managing subscriptions shouldn't feel clunky. Bocs makes it easy with a clean interface, intuitive controls, and a seamless subscriber portal that keeps customers engaged.",
      href: '#',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Powerful Tools, Endless Potential',
      description:
        'Bocs gives you everything you need to build and scale subscription boxes — with powerful features today and a packed roadmap for tomorrow. One app. No clutter.',
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Built to Convert and Retain',
      description:
        "Bocs isn't just easier — it's smarter. Boost conversions, increase retention, and build a stronger subscriber base with tools designed for growth at every step.",
      href: '#',
      icon: ArrowPathIcon,
    },
  ]

  return (
      <>
        <div className="px-6 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            One app. Not five+ plugins. Built to scale subscriptions
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-900">
            Clunky endless plugins and bad user experience fail to deliver the features, flexibility and control you and your customers need.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-indigo-700 text-white shadow-sm hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="bg-white pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600">
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </>
  )
}

function UsefulTools() {
  const benefits = [
    'Create curated and custom box subscriptions',
    'Set flexible billing frequencies and pricing options',
    'Offer one-time (roadmap) or recurring subscription box purchases',
    'Customise box contents with upsells and add-ons (roadmap)',
    'Launch seasonal, evergreen boxes and limited-edition (roadmap)',
    'Manage inventory, product swaps and pricing updates',
  ]

  return (
    <div className="bg-gray-900 pt-24 sm:pt-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16  sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The Easiest Way to Build Subscription Boxes
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Create, sell, and manage subscription boxes without limits. Bocs gives you the flexibility to offer curated and custom box options — all through a seamless experience that drives conversions, boosts retention, and keeps subscribers in control.
              </p>
              <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              {/* <div className="mt-10 flex">
                <a href="#" className="text-sm/6 font-semibold text-indigo-400">
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}

function TakeControl() {
  const benefits = [
    'Update billing, shipping, and box preferences easily',
    'Swap products across subscriptions with a few clicks',
    'Set reminders for expiring cards and renewals',
    'Tag and organize subscriptions for smarter workflows',
    'Add internal notes to subscriptions for better tracking',
    'Pause subscriptions with custom durations',
  ]

  return (
    <div className="bg-gray-900 pt-24 sm:pt-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16  sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Take Control of Your Subscriptions
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Manage every part of the subscription experience without the hassle. Bocs gives you powerful, flexible tools to update payment methods, swap products, manage shipping, tag and track subscriptions, and keep your customers engaged — all from one clean dashboard.
              </p>
              <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              {/* <div className="mt-10 flex">
                <a href="#" className="text-sm/6 font-semibold text-indigo-400">
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}

function SeamlessExperience() {
  const benefits = [
    'Change next payment date directly from the portal',
    'Pause or skip upcoming renewals with ease',
    'Swap products or change box selections anytime',
    'Update payment methods and billing details quickly',
    'Change subscription frequency to fit their needs',
    'Trigger early renewals for faster reorders',
  ]

  return (
    <div className="bg-gray-900 pt-24 sm:pt-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16  sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Deliver a Seamless Subscription Experience
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Give your subscribers the tools they expect. The Bocs customer portal makes it easy for them to manage their subscriptions — from pausing, skipping, or changing boxes, to swapping products, updating payment methods, or adjusting their next payment date — all in a few clicks.
              </p>
              <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              {/* <div className="mt-10 flex">
                <a href="#" className="text-sm/6 font-semibold text-indigo-400">
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}

function CustomerPortal() {
  const benefits = [
    'Track subscription growth, renewals, and cancellations in real-time',
    'View product performance across different box types',
    'Understand customer retention and churn patterns',
    'Segment subscribers by box, frequency, or behavior',
    'Monitor MRR, AOV, and projected recurring revenue',
    'Use data to optimise pricing, product mix, and offers',
  ]

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16  sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Analytics & Reporting Centre
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Bocs gives you a powerful analytics dashboard designed specifically for subscription commerce. From customer behaviour to revenue trends, get the clarity you need to grow faster, reduce churn, and make smarter decisions.
              </p>
              <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              {/* <div className="mt-10 flex">
                <a href="#" className="text-sm/6 font-semibold text-indigo-400">
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <div className='pt-24 sm:pt-32'>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Subscripton Bundle Tools Built For Simplicity
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Insight"
            title="Get perfect clarity"
            description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
            graphic={
              <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Analysis"
            title="Undercut your competitors"
            description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
            graphic={
              <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
            }
            fade={['bottom']}
            className="lg:col-span-3 lg:rounded-tr-4xl"
          />
          <BentoCard
            eyebrow="Speed"
            title="Built for power users"
            description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
            graphic={
              <div className="flex size-full pt-10 pl-10">
                <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
              </div>
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            eyebrow="Source"
            title="Get the furthest reach"
            description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
            graphic={<LogoCluster />}
            className="lg:col-span-2"
          />
          <BentoCard
            eyebrow="Limitless"
            title="Sell globally"
            description="Radiant helps you sell in locations currently under international embargo."
            graphic={<Map />}
            className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          />
        </div>
      </div>
    </Container>
  )
}

function SwitchToBocs() {
  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-32 text-center shadow-2xl sm:px-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ditch the Plugins,<br/>Switch to Bocs
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
          Bocs brings feature you need to create, manage, and grow your subscription box program —curated or custom — on one powerful, dedicated platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://v2.bocs.io/login"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

let classes = '';

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

function Pricing() {
  const tiers = [
    {
      name: 'Hobby',
      id: 'tier-hobby',
      href: '#',
      priceMonthly: '$29',
      description: "The perfect plan if you're just getting started with our product.",
      features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
      featured: false,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      priceMonthly: '$99',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        'Dedicated support representative',
        'Marketing automations',
        'Custom integrations',
      ],
      featured: true,
    },
  ]

  return (
    <div className="relative isolate bg-white px-6 pt-24 sm:pt-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                  : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  )

}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>

        <div className="bg-linear-to-b from-white from-50% to-gray-100 pt-32">
          <Problem />
          {/* <FeatureSection /> */}
          <UsefulTools/>
          <TakeControl/>
          <SeamlessExperience/>
          <CustomerPortal/>
          {/* <BentoSection /> */}
        </div>
        <SwitchToBocs />
        {/* <Pricing /> */}
        {/* <DarkBentoSection /> */}
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
