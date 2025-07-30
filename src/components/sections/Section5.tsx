import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Badge } from '../ui/badge'

const Section5 = () => {
  const faqItems = [
    {
      id: 'faq-1',
      title: 'What is MVT Labs',
      content:
        'MVT Lab is an experimentation platform that lets you run A/B tests, multivariate tests, and personalization campaigns to improve website and app performance—all without heavy coding.',
    },
    {
      id: 'faq-2',
      title: 'How do I get started with MVT Lab?',
      content:
        'Getting started is simple! Sign up for an account, install our lightweight tracking code on your website, and you can begin creating your first experiment within minutes using our intuitive visual editor.',
    },
    {
      id: 'faq-3',
      title: 'Do I need coding skills to use MVT Lab?',
      content:
        'No coding skills required! Our visual editor allows you to make changes to your website through a point-and-click interface. However, developers can also use our advanced features and APIs for more complex customizations.',
    },
    {
      id: 'faq-4',
      title: 'What types of experiments can I run?',
      content:
        'You can run A/B tests, multivariate tests, split URL tests, and personalization campaigns. Test everything from headlines and images to entire page layouts, checkout flows, and user experiences across web and mobile platforms.',
    },
    {
      id: 'faq-5',
      title: 'How accurate and secure is the testing data?',
      content:
        "Our platform uses advanced statistical methods to ensure accurate results with proper significance testing. All data is encrypted in transit and at rest, and we're fully GDPR and CCPA compliant to protect your users' privacy.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <Badge
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
            >
              <span className="text-xs font-medium">FAQS</span>
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Answers to
                <br />
                Your Questions
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Discover MVT Lab's powerful experimentation platform designed to help you test,
                analyze, and optimize every part of your website and app.
              </p>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="w-full">
            <Accordion type="single" collapsible className="space-y-4" defaultValue="faq-1">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 data-[state=open]:bg-white/10 transition-all duration-200"
                >
                  <AccordionTrigger className="text-white hover:text-white/90 text-left py-5 hover:no-underline">
                    <span className="text-base font-medium pr-4">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-5 pt-2 leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
