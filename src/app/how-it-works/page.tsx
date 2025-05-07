import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import Reports from '@/screenshots/reports.png'
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

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
                        How It Works
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Bocs gives you the power to build, manage, and scale subscription boxes—without the limitations of traditional WooCommerce plugins.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a rel="canonical"
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Get Started
                            </a>
                            <a rel="canonical" href="#" className="text-sm/6 font-semibold text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                            </a>
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

function CustomerPortal() {
    const features = [
        {
            name: 'Subscription payments run independently of WooCommerce',
            description: 'Enhance the customer experience and encourage long-term retention by allowing subscribers to personalise their subscriptions swapping bundles, products, upgrading or downgrading frequencies and associated discounts.',
            icon: LockClosedIcon,
        },
        {
            name: 'No plugin conflicts to break renewals or billing',
            description: 'Give subscribers full control over their experience by letting them skip, pause, or cancel deliveries—empowering them to manage their schedules and reducing churn through added flexibility.',
            icon: CloudArrowUpIcon,
        },

        {
            name: 'Smooth, reliable automation every cycle',
            description: 'Keep your subscribers in control with the ability to manage billing, shipping, and payment details directly from their portal to improve customer satisfaction and prevent payment interruptions or delivery delays.',
            icon: ArrowPathIcon,
        },
    ]
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
            A Platform, Not Just a Plugin
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
            Bocs is a standalone application platform—not a plugin. We use a lightweight plugin only to integrate the Bocs customer portal and widget into your WordPress site. This approach gives you greater stability and control
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                  {feature.name}
                </dt>{' '}
                {/* <dd className="inline">{feature.description}</dd> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
}

function AddBocs() {
    const benefits = [
      'Create your Bocs account in minutes',
      'Play with demo data before syncing your store',
      'Connect WooCommerce using a simple sync wizard',
      'Automatically imports products, customers, and order history',
      'Enables deep reporting and analytics from day one',
      'Opens access to subscription box creation tools',
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
                Getting Started Is Easy
                </h2>
                <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Sync your store in minutes and start building your first subscription box. Whether you&apos;re testing things out or ready to launch, onboarding is simple. Use our demo data to explore Bocs or connect your live WordPress store with a guided sync that pulls in your products, orders, and customer data.
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

function Checkout() {
    const benefits = [
      'Customers select a box via the Bocs widget',
      'Bocs inserts selected products into WooCommerce checkout',
      'Stripe processes the payment and stores a secure token',
      'No credit card details are stored on your site',
      'Orders are created as standard WooCommerce orders',
      'Compatible with tax and shipping settings from WooCommerce',
    ]
  
    return (
      <div className="bg-gray-900">
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
                Checkout & Payments
                </h2>
                <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Secure, seamless checkout powered by WooCommerce and Stripe. Bocs integrates directly with your WooCommerce checkout and Stripe account. Subscription logic is handled by Bocs, but payments and order creation flow through WooCommerce—so all existing order-based automations and plugins continue to work.
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

function ManageBocs() {
    const benefits = [
      'View, update, or cancel subscriptions anytime',
      'Set billing frequencies and renewal logic per box',
      'Monitor churn and retention in real-time',
      'Pause, skip, or swap products for individual subscribers',
      'Automate renewals without plugin dependencies',
      'Resolve issues without interfering with WooCommerce orders',
    ]
  
    return (
      <div className="bg-gray-900">
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
                Manage Subscriptions in Bocs
                </h2>
                <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Your central hub for everything subscription-related. All subscription management happens inside Bocs. This clean separation from WooCommerce gives you a powerful, focused interface designed specifically for recurring orders, renewals, and customer management.
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

function CostumerPortal() {
    const benefits = [
      'Customers create an account at checkout',
      'Secure login to manage subscription settings',
      'Pause, skip, cancel, or update frequency',
      'Swap bundles or products (if enabled)',
      'View upcoming orders and history',
      'Fully branded to match your store’s look and feel',
    ]
  
    return (
      <div className="bg-gray-900">
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
                Customer Portal Included
                </h2>
                <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Give your customers control with a branded self-serve portal. Customers automatically gain access to a portal where they can manage all aspects of their subscription. This improves the customer experience while reducing support requests.
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

function Seamless() {
    const benefits = [
      'New products are synced and available for box creation',
      'New orders flow into Bocs for performance tracking',
      'New customers are synced and linked to subscriptions',
      'No need to manually import or update data',
      'Subscription performance reflects the latest store activity',
      'Enables powerful analytics and box optimization',
    ]
  
    return (
      <div className="bg-gray-900 pb-24 sm:pb-32">
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
                Seamless Ongoing Sync
                </h2>
                <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Bocs keeps your store data updated automatically—no manual effort required. As your WooCommerce store grows, Bocs stays in sync. Every new product, customer, or order is pulled into Bocs automatically, keeping your reports accurate and your subscription tools always up to date
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

export default function Compare() {
  return (
    <main className="overflow-hidden">
        <Container>
            <Navbar />
        </Container>
        <Hero/>
        <CustomerPortal/>
        <AddBocs/>
        <Checkout/>
        <ManageBocs/>
        <CostumerPortal/>
        <Seamless/>
        <Testimonials/>
        <Footer/>
    </main>

  )
}
