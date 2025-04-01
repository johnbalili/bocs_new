import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'annually', label: 'Annually' },
]
const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '#',
    featured: false,
    description: 'All features for 30 days, then:',
    price: { monthly: 'Free'},
    highlights: ['Up to $1,000 in MRR', 'Bocs Watermark', 'Basic analytics', 'Woo transactional emails only', '2 boxes, 1 Collection', 'No manual subscription creation feature'],
  },
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    featured: false,
    description: 'All Access as an early adopter',
    price: { monthly: '$39' },
    highlights: [
      'Up to $5,000 in MRR',
    ],
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '#',
    featured: true,
    description: 'All Access as an early adopter',
    price: { monthly: '$79' },
    highlights: [
      'Up to $10,000 in MRR',
    ],
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    featured: false,
    description: 'All Access as an early adopter',
    price: { monthly: '$199' },
    highlights: [
      'Up to $25,000 in MRR',
    ],
  },
  {
    name: 'Scale',
    id: 'tier-scale',
    href: '#',
    featured: false,
    description: 'All Access as an early adopter',
    price: { monthly: '$499' },
    highlights: [
      'Up to $25,000 in MRR',
    ],
  },
]
const sections = [
  {
    name: 'Subscription Boxes',
    features: [
      { name: 'Fixed / Curated', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Custom Choice', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
    ],
  },
  {
    name: 'Bocs Widget',
    features: [
        { name: 'blah blah', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
    ],
  },
  {
    name: 'Subscription Management ',
    features: [
      { name: 'Create a subscription', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Update Billing & Shipping details of a subscription', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Change Boxes', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Change Box Frequency', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Swap Box Products', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Change or Skip Next Payment Date - with settings', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Cancel ', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Subscription Notes', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Custom Tagging of Subscriptions', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Bulk Product Swap ', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Product Pricing Update Sync', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
      { name: 'Manual Renewal Button (Pay Now)', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
    ],
  },
  {
    name: 'Payment Management',
    features: [
        { name: 'Failed Payment Retry System', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
        { name: 'Add or change subscription payment method', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
        { name: 'Stripe payment gateway Support', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
    ],
  },
  {
    name: 'Analytics & Reporting',
    features: [
        { name: 'Forecasting Reports', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
        { name: 'Churn', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
        { name: 'Cohorts', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
        { name: 'Customisable Dashboard', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
        { name: 'Automated Exports', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
        { name: 'Sales Funnel Analysis', tiers: { Free: true, Starter: true, Growth: true, Pro: true, Scale: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="isolate overflow-hidden">
      <div className="flow-root bg-gray-900 pt-24 pb-16 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10">
            <h2 className="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
              Pricing that grows with you
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Choose an affordable plan that’s packed with the best features for engaging your audience, creating
              customer loyalty, and driving sales.
            </p>
            <div className="mt-16 flex justify-center">
              <fieldset aria-label="Payment frequency">
                {/* <RadioGroup
                  value={frequency}
                  onChange={setFrequency}
                  className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white"
                >
                  {frequencies.map((option) => (
                    <Radio
                      key={option.value}
                      value={option}
                      className="cursor-pointer rounded-full px-2.5 py-1 data-checked:bg-indigo-500"
                    >
                      {option.label}
                    </Radio>
                  ))}
                </RadioGroup> */}
              </fieldset>
            </div>
          </div>
          <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-5">
            <svg
              viewBox="0 0 1208 1024"
              aria-hidden="true"
              className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
            >
              <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" />
              <defs>
                <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div
              aria-hidden="true"
              className="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
            />
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? 'z-10 bg-white ring-1 shadow-xl ring-gray-900/10'
                    : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                  'relative rounded-2xl',
                )}
              >
                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3
                    id={tier.id}
                    className={classNames(tier.featured ? 'text-gray-900' : 'text-white', 'text-sm/6 font-semibold')}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div className="mt-2 flex items-center gap-x-4">
                      <p
                        className={classNames(
                          tier.featured ? 'text-gray-900' : 'text-white', tier.name == "Free" ? 'mb-[10px] mt-[10px]' : ''  ,
                          'text-4xl font-semibold tracking-tight',
                        )}
                      >
                        {tier.price['monthly']}
                      </p>
                      <div className="text-sm">
                        {tier.name != "Free" &&
                            <>
                                <p className={tier.featured ? 'text-gray-900' : 'text-white'}>USD</p>
                                <p
                                className={tier.featured ? 'text-gray-500' : 'text-gray-400'}
                                >{`Billed ${frequency.value}`}</p>
                            </>
                        }
                      </div>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.featured
                          ? 'bg-indigo-600 shadow-xs hover:bg-indigo-500 focus-visible:outline-indigo-600'
                          : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                        'rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2',
                      )}
                    >
                      Buy this plan
                    </a>
                  </div>
                  <div className="mt-8 flow-root sm:mt-10">
                    <p className={tier.featured ? 'text-black mb-[20px]' : 'text-white mb-[20px]'}>{tier.description}</p>
                    <ul
                      role="list"
                      className={classNames(
                        tier.featured
                          ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                          : 'divide-white/5 border-white/5 text-white',
                        '-my-2 divide-y border-t text-sm/6 lg:border-t-0',
                      )}
                    >
                      {tier.highlights.map((mainFeature) => (
                        <li key={mainFeature} className="flex gap-x-3 py-2">
                          <CheckIcon
                            aria-hidden="true"
                            className={classNames(
                              tier.featured ? 'text-indigo-600' : 'text-gray-500',
                              'h-6 w-5 flex-none',
                            )}
                          />
                          {mainFeature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 lg:pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          {/* Feature comparison (up to lg) */}
          <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mx-auto max-w-2xl space-y-16">
              {tiers.map((tier) => (
                <div key={tier.id} className="border-t border-gray-900/10">
                  <div
                    className={classNames(
                      tier.featured ? 'border-indigo-600' : 'border-transparent',
                      '-mt-px w-72 border-t-2 pt-10 md:w-80',
                    )}
                  >
                    <h3
                      className={classNames(
                        tier.featured ? 'text-indigo-600' : 'text-gray-900',
                        'text-sm/6 font-semibold',
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm/6 text-gray-600">{tier.description}</p>
                  </div>

                  <div className="mt-10 space-y-10">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <h4 className="text-sm/6 font-semibold text-gray-900">{section.name}</h4>
                        <div className="relative mt-6">
                          {/* Fake card background */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-xs sm:block"
                          />

                          <div
                            className={classNames(
                              tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                              'relative rounded-lg bg-white shadow-xs sm:rounded-none sm:bg-transparent sm:ring-0 sm:shadow-none',
                            )}
                          >
                            <dl className="divide-y divide-gray-200 text-sm/6">
                              {section.features.map((feature) => (
                                <div
                                  key={feature.name}
                                  className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                >
                                  <dt className="pr-4 text-gray-600">{feature.name}</dt>
                                  <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                    {typeof feature.tiers[tier.name] === 'string' ? (
                                      <span
                                        className={tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900'}
                                      >
                                        {feature.tiers[tier.name]}
                                      </span>
                                    ) : (
                                      <>
                                        {feature.tiers[tier.name] === true ? (
                                          <CheckIcon aria-hidden="true" className="mx-auto size-5 text-indigo-600" />
                                        ) : (
                                          <XMarkIcon aria-hidden="true" className="mx-auto size-5 text-gray-400" />
                                        )}

                                        <span className="sr-only">
                                          {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                        </span>
                                      </>
                                    )}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>

                          {/* Fake card border */}
                          <div
                            aria-hidden="true"
                            className={classNames(
                              tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                              'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature comparison (lg+) */}
          <section aria-labelledby="comparison-heading" className="hidden lg:block">
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="grid grid-cols-6 gap-x-8 border-t border-gray-900/10 before:block">
              {tiers.map((tier) => (
                <div key={tier.id} aria-hidden="true" className="-mt-px">
                  <div
                    className={classNames(
                      tier.featured ? 'border-indigo-600' : 'border-transparent',
                      'border-t-2 pt-10',
                    )}
                  >
                    <p
                      className={classNames(
                        tier.featured ? 'text-indigo-600' : 'text-gray-900',
                        'text-sm/6 font-semibold',
                      )}
                    >
                      {tier.name}
                    </p>
                    {/* <p className="mt-1 text-sm/6 text-gray-600">{tier.description}</p> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="-mt-6 space-y-16">
              {sections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm/6 font-semibold text-gray-900">{section.name}</h3>
                  <div className="relative -mx-8 mt-10">
                    {/* Fake card backgrounds */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-8 inset-y-0 grid grid-cols-6 gap-x-8 before:block"
                    >
                      <div className="size-full rounded-lg bg-white shadow-xs" />
                      <div className="size-full rounded-lg bg-white shadow-xs" />
                      <div className="size-full rounded-lg bg-white shadow-xs" />
                    </div>

                    <table className="relative w-full border-separate border-spacing-x-8">
                      <thead>
                        <tr className="text-left">
                          <th scope="col">
                            <span className="sr-only">Feature</span>
                          </th>
                          {tiers.map((tier) => (
                            <th key={tier.id} scope="col">
                              <span className="sr-only">{tier.name} tier</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.features.map((feature, featureIdx) => (
                          <tr key={feature.name}>
                            <th scope="row" className="w-1/6 py-3 pr-4 text-left text-sm/6 font-normal text-gray-900">
                              {feature.name}
                              {featureIdx !== section.features.length - 1 ? (
                                <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                              ) : null}
                            </th>
                            {tiers.map((tier) => (
                              <td key={tier.id} className="relative w-1/6 px-4 py-0 text-center">
                                <span className="relative size-full py-3">
                                  {typeof feature.tiers[tier.name] === 'string' ? (
                                    <span
                                      className={classNames(
                                        tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900',
                                        'text-sm/6',
                                      )}
                                    >
                                      {feature.tiers[tier.name]}
                                    </span>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.name] === true ? (
                                        <CheckIcon aria-hidden="true" className="mx-auto size-5 text-indigo-600" />
                                      ) : (
                                        <XMarkIcon aria-hidden="true" className="mx-auto size-5 text-gray-400" />
                                      )}

                                      <span className="sr-only">
                                        {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                      </span>
                                    </>
                                  )}
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Fake card borders */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-6 gap-x-8 before:block"
                    >
                      {tiers.map((tier) => (
                        <div
                          key={tier.id}
                          className={classNames(
                            tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                            'rounded-lg',
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
