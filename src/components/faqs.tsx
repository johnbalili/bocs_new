"use client";
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/container'
const faqs = [
//   {
//     question: "What is the purpose of this Alpha Program?",
//     answer:
//       "This Alpha Program allows users to explore and interact with the app to identify bugs, issues, and areas for improvement. Your feedback will help us enhance the app before its official launch.",
//   },
//   {
//     question: "Should I connect the app to my live website?",
//     answer:
//       "Yes, You can connect your website and even sync Woocommerce subscriptions. When you connect your website Bocs will be in Sandbox mode meaning no subscriptions will trigger. We strongly suggest keeping Sandbox mode on, until we reach Beta",
//   },
//   {
//     question: "Will the app work perfectly during testing?",
//     answer:
//       "The app is still in development, so you may encounter bugs, glitches, and incomplete features. Your feedback on these issues is crucial for us to improve the app.",
//   },
//   {
//     question: "How can I report bugs or issues?",
//     answer:
//       "You can report any bugs or issues directly through the app's feedback section or via our dedicated feedback portal. Please provide as much detail as possible to help us resolve the issue quickly.",
//   },
//   {
//     question: "Can I suggest new features for the app?",
//     answer:
//       "Yes! We value your input and encourage you to suggest new features. You can submit your ideas through the app’s suggestion section.",
//   },
//   {
//     question: "How does feature voting work?",
//     answer:
//       "After submitting a feature suggestion, other users can vote on it. The most popular features will be prioritised for development in future updates.",
//   },
//   {
//     question: "Will my feedback influence the final version of the app?",
//     answer:
//       "Absolutely! Your feedback is essential in shaping the final product. We will carefully review all suggestions and issues reported during this testing phase.",

//   },
//   {
//     question: "How will I know when a feature I suggested or voted on is implemented?",
//     answer:
//       "We will keep you updated on the progress of popular feature suggestions through regular updates within the app. You'll also receive notifications when a feature you voted on is implemented by signing up to the notifications.",
//   },
//   {
//     question: "Who can I contact if I have more questions or need help?",
//     answer:
//       "If you have any additional questions or need support, please contact our support team through the in-app support section.",
//   },
  // More questions...
  {
    question: "Does this give me LTD access to Bocs subscriptions? ",
    answer:
      "No. This LTD (Lifetime Deal) is only for Analytics)",
  },
  {
    question: "Does this work without a Bocs subscription?",
    answer:
      "Yes. You can use Bocs Analytics & Reporting on any WooCommerce store — no need to use our subscription builder.",
  },
  {
    question: "Will I get all future updates?",
    answer:
      "Yes. This LTD gives you lifetime access to all analytics features, forever.",
  },
  {
    question: "Can I suggest a report?",
    answer:
      "Absolutely. We’re shaping this with early users — let us know what you need.",
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      aria-label="faq-title"
      className="scroll-mt-14 pb-16 sm:scroll-mt-32 sm:pb-20 lg:pb-32"
    >
      <Container className="relative text-lg tracking-tight text-slate-700">
        <p className="mt-8 mb-8 ont-display text-4xl font-bold tracking-tight text-slate-900">
        Check out our FAQ&#39;s below
        </p>

        <div className="bg-gray-900">

          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20">


            <div className="mx-auto max-w-4xl divide-y divide-white/10">

              <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently Asked Questions (FAQs)</h2>
              <dl className="mt-10 space-y-6 divide-y divide-white/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusIcon className="h-6 w-6" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-6 w-6" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
