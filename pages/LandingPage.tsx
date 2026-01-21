
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PrimaryButton, SecondaryButton } from '../components/UI';

const LandingPage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form and close modal after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setContactForm({ name: '', email: '', message: '' });
      setIsContactModalOpen(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900 font-sans selection:bg-brand-200 selection:text-brand-900 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <header className="relative pt-32 pb-20 overflow-hidden" role="banner">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-100 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[60%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">AI Marketing Intelligence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6"
          >
            Make Better <span className="inline-block bg-brand-600 text-white px-2 rounded-lg transform -rotate-2 mx-1 shadow-lg shadow-brand-500/30">Marketing</span> Decisions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Premartic helps you test marketing ideas and predict results before spending money on ads. Make smart choices that actually work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-16"
          >
            <Link to="/auth" aria-label="Sign up for Premartic">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-600 hover:bg-brand-700 text-white text-base font-semibold py-3.5 px-8 rounded-full shadow-lg shadow-brand-500/30 flex items-center gap-2 transition-all"
              >
                Enter Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>

          {/* Chat UI Mockup */}
          <div className="relative max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100 p-6 sm:p-8 text-left">
            {/* Decorative dots */}
            <div className="absolute top-6 left-6 flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-900"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            <div className="mt-8 space-y-6">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-slate-100 text-slate-700 text-sm py-2.5 px-5 rounded-2xl rounded-tr-sm max-w-[85%]">
                  "How should I optimize my landing page for better conversions?"
                  <div className="text-[10px] text-slate-400 mt-1 text-right">Me • Just now</div>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  AI
                </div>
                <div className="bg-brand-50 text-slate-700 text-sm py-3 px-5 rounded-2xl rounded-tl-sm max-w-[90%] border border-brand-100 shadow-sm">
                  <p>Based on your current setup, I recommend moving the CTA above the fold and strengthening your value proposition. Here's what needs to be fixed...</p>
                  <div className="text-[10px] text-brand-400 mt-1">Premartic AI • Just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. PROBLEM SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-200"
        aria-labelledby="problem-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-brand-600 uppercase tracking-[0.2em] mb-6 block">The Deployment Problem</span>
            <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why do most marketing campaigns fail quickly?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Most businesses start ads based on hunches. They write text, build pages, and hope for the best. This wastes thousands of dollars on ads that don't convert.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Without testing first, you're paying for ads that might not work. Premartic helps you test ideas before spending money.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-200 flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 opacity-60"
              >
                <div className="w-6 h-6 rounded-full border-2 border-red-900 flex items-center justify-center text-red-800 font-bold text-sm">×</div>
                <p className="font-medium text-slate-700">Writing copy based on "gut feeling"</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 opacity-60"
              >
                <div className="w-6 h-6 rounded-full border-2 border-red-900 flex items-center justify-center text-red-800 font-bold text-sm">×</div>
                <p className="font-medium text-slate-700">Launching without conversion audits</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 text-slate-900"
              >
                <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
                <p className="font-bold">Simulating performance outcomes before spend</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. WHAT IS PREMARTIC */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-200 bg-slate-50"
        aria-labelledby="about-heading"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-sm font-bold text-brand-600 uppercase tracking-[0.2em] mb-6 block">Platform Definition</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            id="about-heading"
            className="text-4xl font-bold text-slate-900 mb-8"
          >
            What is Premartic?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-700 leading-relaxed mb-8"
          >
            Premartic is a smart tool that helps you make better marketing choices. It tests your ideas and predicts results before you spend money on ads.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Unlike tools that just write text, Premartic checks your marketing materials and suggests improvements. It uses AI to understand what people respond to, so you can create ads that actually convert visitors into customers.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* 4. HOW IT WORKS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-200 bg-slate-50"
        aria-labelledby="workflow-heading"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          id="workflow-heading"
          className="text-center text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-16"
        >
          The Intelligence Workflow
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Create Ideas", desc: "Enter your product details to generate different marketing approaches and angles.", delay: 0.3 },
            { step: "02", title: "Test Ideas", desc: "Compare different versions to see which ones perform best.", delay: 0.5 },
            { step: "03", title: "Check Pages", desc: "Scan your landing pages to find and fix problems.", delay: 0.7 },
            { step: "04", title: "Improve Content", desc: "Use the results to create better marketing materials.", delay: 0.9 }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-lg shadow-slate-900/5 transition-all"
            >
              <span className="text-6xl font-black text-slate-300 absolute top-4 right-6 opacity-20">{item.step}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. CORE FEATURES */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-900/50" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-3xl font-bold text-white mb-20 text-center">Core Capabilities</h2>
        
        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-red-900 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Smart Messaging</span>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Message Generator</h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Creates different ways to talk about your product. It finds the best approaches based on what people actually respond to.
              </p>
              <ul className="space-y-3 text-sm font-bold text-slate-600 uppercase tracking-widest">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Finds what motivates people</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Adjusts tone and style</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Creates attention-grabbing hooks</li>
              </ul>
            </div>
            <div className="lg:col-span-7 bg-[#111] p-12 rounded-[40px] border border-gray-800 shadow-2xl">
              <div className="space-y-6">
                 <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                    <p className="text-xs text-gray-500 uppercase mb-2">Input</p>
                    <p className="text-white font-medium">"SaaS for remote project management"</p>
                 </div>
                 <div className="flex justify-center text-gray-600">↓</div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <p className="text-xs text-red-900 font-bold uppercase mb-2">Generated Prime Angle</p>
                    <p className="text-[#0B0B0B] font-bold text-lg">"The Async Synchronicity Paradox"</p>
                    <p className="text-xs text-gray-500 mt-2">Rational: Targets the anxiety of remote disconnection while promising the speed of in-person collaboration.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 bg-[#111] p-12 rounded-[40px] border border-gray-800 shadow-2xl">
               <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 rounded-2xl bg-red-900/10 border border-red-900/30">
                    <p className="text-xs text-red-800 font-bold uppercase mb-4">Variant A</p>
                    <div className="text-2xl font-black text-red-900">42/100</div>
                    <p className="text-[10px] text-red-700 mt-2">Predicted Low Performance</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-green-900/10 border border-green-900/30">
                    <p className="text-xs text-green-800 font-bold uppercase mb-4">Variant B</p>
                    <div className="text-2xl font-black text-green-900">94/100</div>
                    <p className="text-[10px] text-green-700 mt-2">Projected Winner</p>
                 </div>
               </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-red-900 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Ad Testing</span>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Performance Tester</h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Test different versions of your ads and headlines. See which ones are likely to work better before running real campaigns.
              </p>
              <ul className="space-y-3 text-sm font-bold text-slate-600 uppercase tracking-widest">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Compare ad variations</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Score headline effectiveness</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Predict winners</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-red-900 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Page Analysis</span>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Page Analyzer</h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Paste your landing page content. The Conversion Doctor finds problems that stop visitors from converting. It shows you exactly what to fix to get more sales.
              </p>
              <ul className="space-y-3 text-sm font-bold text-slate-600 uppercase tracking-widest">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Finds conversion blockers</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Checks call-to-action buttons</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900" />Suggests text improvements</li>
              </ul>
            </div>
            <div className="lg:col-span-7 bg-[#111] p-12 rounded-[40px] border border-gray-800 shadow-2xl">
               <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-red-900/30 bg-red-900/5 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-red-800" />
                    <p className="text-gray-300 text-sm"><strong className="text-white">Blocker Detected:</strong> Headline lacks specific benefit.</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-red-900/30 bg-red-900/5 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-red-800" />
                    <p className="text-gray-300 text-sm"><strong className="text-white">Friction Point:</strong> CTA is buried below fold.</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-green-900/30 bg-green-900/5 rounded-xl mt-8">
                    <div className="w-2 h-2 rounded-full bg-green-800" />
                    <p className="text-gray-300 text-sm"><strong className="text-white">Prescription:</strong> Move CTA to hero section and make benefit concrete.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT IT IS NOT */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-200" aria-labelledby="distinctions-heading">
        <div className="bg-white p-12 rounded-[32px] shadow-xl shadow-slate-900/10 border border-slate-200 text-center max-w-3xl mx-auto">
          <h2 id="distinctions-heading" className="text-2xl font-bold text-slate-900 mb-6">What We Do (and Don't Do)</h2>
          <p className="text-slate-600 mb-8 font-medium">We're clear about what Premartic can and cannot do for you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <span className="text-red-900 text-xs font-bold uppercase tracking-widest mb-2 block">Premartic is NOT</span>
              <ul className="text-slate-600 space-y-2 text-sm font-medium">
                <li>• A tool for buying ads automatically</li>
                <li>• A social media posting scheduler</li>
                <li>• A generic content writer</li>
              </ul>
            </div>
            <div>
              <span className="text-green-900 text-xs font-bold uppercase tracking-widest mb-2 block">Premartic IS</span>
              <ul className="text-slate-600 space-y-2 text-sm font-medium">
                <li>• A smart analysis tool</li>
                <li>• A way to test ideas before launching</li>
                <li>• A conversion optimization helper</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO IT IS FOR */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-200 bg-slate-50"
        aria-labelledby="audience-heading"
      >
         <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
           id="audience-heading"
           className="text-3xl font-bold text-slate-900 mb-12 text-center"
         >
           Who Uses Premartic?
         </motion.h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 border border-slate-200 rounded-2xl bg-white shadow-lg shadow-slate-900/5 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Business Owners</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Test your business ideas before spending money on ads. Save time and money by knowing what works.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 border border-slate-200 rounded-2xl bg-white shadow-lg shadow-slate-900/5 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Marketing Agencies</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Check client websites and ads quickly. Find easy improvements and show results with data.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 border border-slate-200 rounded-2xl bg-white shadow-lg shadow-slate-900/5 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Marketing Teams</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Organize your testing process. Go from ideas to proven campaigns faster.
              </p>
            </motion.div>
         </div>
      </motion.section>

      {/* 8. PRICING */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-200 bg-slate-50"
        aria-labelledby="pricing-heading"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          id="pricing-heading"
          className="text-center text-3xl font-bold text-slate-900 mb-16"
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-10 border border-slate-200 rounded-3xl bg-white shadow-xl shadow-slate-900/10 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Individual Plan</h3>
            <p className="text-slate-600 text-sm mb-8">Perfect for freelancers and small teams.</p>
            <div className="text-4xl font-black text-slate-900 mb-8">$99<span className="text-lg font-medium text-slate-500">/mo</span></div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm text-slate-600"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Unlimited Analysis Requests</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Full Message Generator Access</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Performance Tester Simulations</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Page Analyzer Elite</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />PDF Report Exports</li>
            </ul>
            <Link to="/auth" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold py-3 px-6 rounded-xl shadow-lg shadow-brand-500/30 transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-10 border-2 border-brand-600/20 rounded-3xl bg-white shadow-xl shadow-brand-500/10 relative flex flex-col"
          >
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-2xl rounded-tr-2xl">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise Plan</h3>
            <p className="text-slate-600 text-sm mb-8">For growing businesses and agencies.</p>
            <div className="text-4xl font-black text-slate-900 mb-8">$499<span className="text-lg font-medium text-slate-500">/mo</span></div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Everything in Individual</li>
              <li className="flex items-center gap-3 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Advanced Analytics Dashboard</li>
              <li className="flex items-center gap-3 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Team Collaboration Tools</li>
              <li className="flex items-center gap-3 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Priority Support</li>
              <li className="flex items-center gap-3 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />Custom Integrations</li>
            </ul>
            <Link to="/auth" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold py-3 px-6 rounded-xl shadow-lg shadow-brand-500/30 transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 9. CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 px-6 md:px-12 text-center bg-slate-50"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8"
        >
          Stop guessing. Start testing.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
        >
          Don't waste money on ads that don't work. Test your ideas first and see what actually converts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/auth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-600 hover:bg-brand-700 text-white text-base font-semibold py-4 px-8 rounded-full shadow-lg shadow-brand-500/30 transition-all"
            >
              Launch Intelligence Engine
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-white text-xs mb-6">P</div>
            <p className="text-slate-400 text-sm max-w-xs">
              Premartic is the decision-support system for high-stakes marketing. Built for executives, founders, and growth leaders.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/auth" className="hover:text-white transition-colors">Sign In</Link></li>
                <li><Link to="#features" className="hover:text-white transition-colors">Message Generator</Link></li>
                <li><Link to="#features" className="hover:text-white transition-colors">Performance Tester</Link></li>
                <li><Link to="#features" className="hover:text-white transition-colors">Page Analyzer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={() => setIsContactModalOpen(true)} className="hover:text-white transition-colors cursor-pointer text-left">Contact Us</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
          <p>© 2026 Premartic Intelligence.</p>
          <p>System Status: Operational</p>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Contact Us</h3>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-slate-400 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    We typically respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
