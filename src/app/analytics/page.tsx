'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { FAQ } from '@/components/faqs'
import Reports from '@/screenshots/reports.png'


function Hero(){
    return (
        <>
            <div className="relative isolate overflow-hidden bg-white">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
                >
                    <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                    </defs>
                    <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
                        <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                        Powerful WooCommerce Analytics & Reporting for Subscriptions + eCommerce
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Track revenue, uncover insights, and truly understand your customers — all in one streamlined dashboard.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Lifetime access for just $59 USD
                            </a>
                            {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    alt="App screenshot"
                                    src={Reports.src}
                                    width={2432}
                                    height={1442}
                                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function GoodBye() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Say Goodbye to Frankensteined Reports
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
            Our analytics engine is built from the ground up for subscription & eCommerce businesses. Join early and save for life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Sign Up To Our LTD 
              </a>
              {/* <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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

function RoadMap() {
    const features = [
        { name: 'Forecasting Reports',},
        { name: 'Customisable dashboards ',},
        { name: 'Revenue Reports',},
        { name: 'Product Reports'},
        { name: 'Order Reports'},
        { name: 'All Woocommerce Standard Reports',},
        { name: 'Cohort Reports',},
        { name: 'Demographic Reports',},
        { name: 'Interest Reports',},
        { name: 'Google Analytics Enhanced Tracking',},
        { name: 'Website Visitor Tracking',},
        { name: 'Page Level Analytics'},
        { name: 'Track User Engagement'},
        { name: 'Sales Funnel Reports',},
        { name: 'userID tracking for repeat purchasers',},
        { name: 'Scheduled Email Reporting',},
        { name: 'Custom Meta Field Filters',},
        { name: 'Order statuses',},
        { name: 'Segmentation',},
        { name: 'Product Grouping'},
        { name: 'Presets'},
        { name: 'Downloadable Reports',},
        { name: 'Sharing Feature',},
        { name: 'More dynamic ranges',},
        { name: 'Social Media Reports'},
        { name: 'eCommerce Sales Funnel Reports',},
        { name: 'PPC tracking',},
        { name: 'Scroll tracking',},
    ]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-semibold text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our Roadmap
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
            The reports and features here are already on our roadmap — built for WooCommerce stores of all kinds. See something missing or have a specific reporting need? Let us know — your input helps shape what we build next.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-5 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-indigo-500" />
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {

  return (
    <main className="overflow-hidden">
      {/* <GradientBackground /> */}
      <Container>
        <Navbar />
      </Container>
      <Hero/>
      <GoodBye/>
      <RoadMap/>
      <FAQ/>
      <Testimonials/>
      <Footer />
      {/* <Footer /> */}
    </main>
  )
}
