'use client'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

// type TypeTierNames = "Woocommerce" | "Bocs Beta-Launch" | "Bocs Public Launch";

type TypeTierId = 'Starter' | 'Scale' | 'Growth'

type TypeTiers = {
  id: TypeTierId
  name: string
  href: string
  featured: boolean
  description: string
  price: {
    monthly: string
    annually: string
  }
  mainFeatures: string[]
}

const tiers: TypeTiers[] = [
  {
    id: 'Starter',
    name: 'Bocs App ',
    href: '#',
    featured: true,
    description: 'Fully Featured - Note some features listed are part of the Bocs roadmap',
    price: { monthly: '$15', annually: '$144' },
    mainFeatures: [
      'Basic invoicing',
      'Easy to use accounting',
      'Mutli-accounts',
    ],
  },
  {
    id: 'Scale',
    name: 'Woocommerce Subscriptions',
    href: '#',
    featured: false,
    description: 'Out of the box Woocommerce features or additional plugin extensions required',
    price: { monthly: '$60', annually: '$576' },
    mainFeatures: [
      'Advanced invoicing',
      'Easy to use accounting',
      'Mutli-accounts',
      'Tax planning toolkit',
      'VAT & VATMOSS filing',
      'Free bank transfers',
    ],
  },
  {
    id: 'Growth',
    name: 'Additional Cost (USD)',
    href: '#',
    featured: false,
    description: 'Extra yearly fees for extended up-to-date plugins to match Bocs features',
    price: { monthly: '$30', annually: '$288' },
    mainFeatures: [
      'Basic invoicing',
      'Easy to use accounting',
      'Mutli-accounts',
      'Tax planning toolkit',
    ],
  },
]

type TypeSections = {
  name: string
  features: {
    name: string
    tiers: {
      [key in TypeTierId]: string | boolean
    }
  }[]
}

const sections: TypeSections[] = [
  {
    name: 'Subscription Options',
    features: [
      {
        name: 'Sell subscriptions',
        tiers: {
          Starter: true,
          Scale: 'Woo Subscriptions',
          Growth: '$279',
        },
      },
      {
        name: 'Subscriptions Boxes',
        tiers: {
          Starter: true,
          Scale: 'All Products For Woo Subscriptions',
          Growth: '$99',
        },
      },
      {
        name: 'Subscriptions Boxes',
        tiers: {
          Starter: true,
          Scale: 'Woocommerce product bundles',
          Growth: '$79',
        },
      },
      {
        name: 'Dynamic prices',
        tiers: {
          Starter: true,
          Scale: 'Woo Dynamic Pricing',
          Growth: '$129',
        },
      },
      {
        name: 'Memberships',
        tiers: {
          Starter: true,
          Scale: ' Woo Memberships',
          Growth: '$199',
        },
      },
      {
        name: 'Group Tiered Subscription Levels',
        tiers: {
          Starter: true,
          Scale: 'Groups for Woocommerce',
          Growth: '$79',
        },
      },
    ],
  },
  {
    name: 'Boxes & Customisation',
    features: [
      {
        name: 'Create curated & custom selection boxes',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Assign payment frequencies with corresponding discounts either $ or % value',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Min/Max rules for custom boxes',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Create and edit boxes in widget mode for easy visualisation of flow',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Sign up flow templates with customisation',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Self deploy subscription boxes using shortcodes on any page of your website',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Reusable custom branding themes & templates',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Global and single template options',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Collections widget to combine multiple boxes into the one sign up flow',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
    ],
  },
  {
    name: 'Subscriptions Management',
    features: [
      {
        name: 'Custom notes & tagging - keep track of every subscription',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Subscription Pricing Management ',
        tiers: { Starter: true, Scale: 'Enhancer for WooCommerce Subscriptions', Growth: '$99.00' },
      },
      {
        name: 'Advanced custom notifications',
        tiers: { Starter: true, Scale: 'Automatewoo', Growth: '$159.00' },
      },
      {
        name: 'Subscriber Management - Upgrade/Downgrade, swap products, pause, set new payment dates, billing & shipping changes',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Payment retry system - automated cycle restart ',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
    ],
  },
  {
    name: 'Subscriber Self-Management',
    features: [
      {
        name: 'Pause & skip payment cycle with admin controls',
        tiers: { Starter: true, Scale: 'Enhancer for WooCommerce Subscriptions', Growth: '$99.00' },
      },
      {
        name: 'Upgrade or or downgrade box options',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Product swaps',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Cancellation Flows',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Expired Card Notifications',
        tiers: { Starter: true, Scale: 'Automatewoo', Growth: '$159.00' },
      },
      {
        name: 'My Account upsells',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
    ],
  },
  {
    name: 'Analytics & Reporting',
    features: [
      {
        name: 'Advanced search and tagging',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Advanced order, revenue, customer, product analytics',
        tiers: { Starter: true, Scale: 'Metorik Plugin', Growth: '$200' },
      },
      {
        name: 'Subscription box analytics',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Churn rates',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Subscription vs non-subscription analytics',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Easy data management including export function',
        tiers: { Starter: true, Scale: false, Growth: '$200' },
      },
      {
        name: '100’s customisable reporting dashboards',
        tiers: { Starter: true, Scale: 'Metorik Plugin', Growth: '$200' },
      },
      {
        name: 'Product Forecasting for subscription boxes',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
    ],
  },
  {
    name: 'Account & Admin',
    features: [
      {
        name: 'Connect multiple stores',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
      {
        name: 'Multiple user roles and permissions',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Full API functionality',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Global custom theme and template options',
        tiers: { Starter: true, Scale: false, Growth: true },
      },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function TabbedCompare() {
  return (
    <div className="isolate overflow-hidden">
      <div className="relative bg-gray-50 lg:pt-14">
        <div className="mt-8 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-slate font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
          All In One Subscription Box Solution
          </h2>
          <p className="text-slate mt-6 text-lg tracking-tight ">
          Replace your slow plugins & extensions, simplify your processes & eliminate developer costs with Bocs.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          {/* Feature comparison (up to lg) */}
          <section
            aria-labelledby="mobile-comparison-heading"
            className="lg:hidden"
          >
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mx-auto max-w-2xl space-y-16">
              {tiers.map((tier) => (
                <div key={tier.id} className="border-t border-gray-900/10">
                  <div
                    className={classNames(
                      tier.featured ? 'border-teal-700' : 'border-transparent',
                      '-mt-px w-72 border-t-2 pt-10 md:w-80',
                    )}
                  >
                    <h3
                      className={classNames(
                        tier.featured ? 'text-teal-700' : 'text-gray-900',
                        'text-sm font-semibold leading-6',
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mt-10 space-y-10">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <h4 className="text-sm font-semibold leading-6 text-gray-900">
                          {section.name}
                        </h4>
                        <div className="relative mt-6">
                          {/* Fake card background */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
                          />

                          <div
                            className={classNames(
                              tier.featured
                                ? 'ring-2 ring-teal-700'
                                : 'ring-1 ring-gray-900/10',
                              'sm:shadow-none relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:ring-0',
                            )}
                          >
                            <dl className="divide-y divide-gray-200 text-sm leading-6">
                              {section.features.map((feature) => (
                                <div
                                  key={feature.name}
                                  className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                >
                                  <dt className="pr-4 text-gray-600">
                                    {feature.name}
                                  </dt>
                                  <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                    {typeof feature.tiers[tier.id] ===
                                      'string' ? (
                                      <span
                                        className={
                                          tier.featured
                                            ? 'font-semibold text-teal-700'
                                            : 'text-gray-900'
                                        }
                                      >
                                        {feature.tiers[tier.id]}
                                      </span>
                                    ) : (
                                      <>
                                        {feature.tiers[tier.id] ? (
                                          <CheckIcon
                                            className="mx-auto h-5 w-5 text-teal-700"
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <XMarkIcon
                                            className="mx-auto h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                          />
                                        )}

                                        <span className="sr-only">
                                          {feature.tiers[tier.id]
                                            ? 'Yes'
                                            : 'No'}
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
                              tier.featured
                                ? 'ring-2 ring-teal-700'
                                : 'ring-1 ring-gray-900/10',
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
          <section
            aria-labelledby="comparison-heading"
            className="hidden lg:block"
          >
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
              {tiers.map((tier) => (
                <div key={tier.id} aria-hidden="true" className="-mt-px">
                  <div
                    className={classNames(
                      tier.featured ? 'border-teal-700' : 'border-transparent',
                      'border-t-2 pt-10',
                    )}
                  >
                    <p
                      className={classNames(
                        tier.featured ? 'text-teal-700' : 'text-gray-900',
                        'text-sm font-semibold leading-6',
                      )}
                    >
                      {tier.name}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {tier.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="-mt-6 space-y-16">
              {sections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    {section.name}
                  </h3>
                  <div className="relative -mx-8 mt-10">
                    {/* Fake card backgrounds */}
                    <div
                      className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                      aria-hidden="true"
                    >
                      <div className="h-full w-full rounded-lg bg-white shadow-sm" />
                      <div className="h-full w-full rounded-lg bg-white shadow-sm" />
                      <div className="h-full w-full rounded-lg bg-white shadow-sm" />
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
                            <th
                              scope="row"
                              className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
                            >
                              {feature.name}
                              {featureIdx !== section.features.length - 1 ? (
                                <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                              ) : null}
                            </th>
                            {tiers.map((tier) => (
                              <td
                                key={tier.id}
                                className="relative w-1/4 px-4 py-0 text-center"
                              >
                                <span className="relative h-full w-full py-3">
                                  {typeof feature.tiers[tier.id] ===
                                    'string' ? (
                                    <span
                                      className={classNames(
                                        tier.featured
                                          ? 'font-semibold text-teal-700'
                                          : 'text-gray-900',
                                        'text-sm leading-6',
                                      )}
                                    >
                                      {feature.tiers[tier.id]}
                                    </span>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.id] ? (
                                        <CheckIcon
                                          className="mx-auto h-5 w-5 text-teal-700"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <XMarkIcon
                                          className="mx-auto h-5 w-5 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      )}

                                      <span className="sr-only">
                                        {feature.tiers[tier.id] ? 'Yes' : 'No'}
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
                      className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                      aria-hidden="true"
                    >
                      {tiers.map((tier) => (
                        <div
                          key={tier.id}
                          className={classNames(
                            tier.featured
                              ? 'ring-2 ring-teal-700'
                              : 'ring-1 ring-gray-900/10',
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
