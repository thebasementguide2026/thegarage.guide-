'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { getTaskIdsForArticle, FALLBACK_TASK_IDS } from '@/lib/taskIdMap'

// All Networx task IDs with human-readable labels (garage related)
const PROJECT_TYPE_OPTIONS = [
  { value: '86', label: 'Garage Door Install' },
  { value: '87', label: 'Garage Door Repair' },
  { value: '90', label: 'Garage Door Service' },
  { value: '88', label: 'Garage Door Opener/Remote - Install' },
  { value: '89', label: 'Garage Door Opener/Remote - Repair' },
  { value: '94', label: 'Garage Door Spring Replacement' },
  { value: '91', label: 'Garage Door Panel Replacement/Repair' },
  { value: '85', label: 'Garage Door Broken Hinges' },
  { value: '95', label: 'Garage Door Weather Stripping/Insulation' },
  { value: '77', label: 'Garage Floor Coatings' },
  { value: '74', label: 'Concrete Driveways/Floors - Install' },
  { value: '75', label: 'Concrete Driveways/Floors - Repair' },
  { value: '269', label: 'Garage Build' },
  { value: '144', label: 'Garage Remodel' },
  { value: '587', label: 'Garage or Shed Roof Replacement' },
  { value: '258', label: 'Insulation' },
  { value: '178', label: 'Electrical Wiring/Rewiring' },
  { value: '583', label: 'Electric Car Charging Station' },
  { value: '188', label: 'Interior Lighting - Install' },
  { value: '177', label: 'Switches/Outlets/Fixtures - Install' },
  { value: '226', label: 'Handyman' },
  { value: '56', label: 'Organizing/Declutter' },
  { value: '38', label: 'Cabinets/Drawers Installation' },
  { value: '40', label: 'Closets/Built-in Furniture' },
]

interface LeadFormProps {
  taskIds?: number[]
}

export default function LeadForm({ taskIds }: LeadFormProps) {
  const pathname = usePathname()

  // Auto-detect task IDs from URL if not explicitly passed
  const resolvedTaskIds = taskIds || (() => {
    const segments = pathname.split('/')
    const slug = segments[segments.length - 1] || segments[segments.length - 2]
    return slug ? getTaskIdsForArticle(slug) : FALLBACK_TASK_IDS
  })()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    projectType: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    // Get TrustedForm cert URL from hidden field injected by TrustedForm script
    const certInput = document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement
    const trustedFormCertUrl = certInput?.value || ''

    // Build final task IDs: start with the user-selected project type,
    // then include the page-level auto-detected IDs for full coverage
    const selectedTaskId = formData.projectType ? parseInt(formData.projectType) : null
    let finalTaskIds = [...resolvedTaskIds]
    if (selectedTaskId && !finalTaskIds.includes(selectedTaskId)) {
      finalTaskIds = [selectedTaskId, ...finalTaskIds]
    }

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          taskIds: finalTaskIds,
          trustedFormCertUrl,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className='py-12 bg-[#F5F0EB] rounded-2xl mt-12'>
        <div className='max-w-2xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-[#2D3748]'>Thank You!</h2>
          <p className='text-gray-600 mt-4'>We&apos;ve received your information. You&apos;ll receive quotes from local garage professionals within 24 hours.</p>
        </div>
      </section>
    )
  }

  return (
    <section className='py-12 bg-[#F5F0EB] rounded-2xl mt-12'>
      <div className='max-w-2xl mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-center text-[#2D3748]'>Get Expert Garage Help</h2>
        <p className='text-gray-600 text-center mb-8'>Connect with qualified garage professionals in your area. Free quotes, no obligation.</p>
        <form onSubmit={handleSubmit} className='bg-white rounded-xl p-6 md:p-8 shadow-sm'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-1'>First Name *</label>
              <input type='text' id='firstName' required className='w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
            </div>
            <div>
              <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-1'>Last Name *</label>
              <input type='text' id='lastName' required className='w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email *</label>
            <input type='email' id='email' required className='w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className='mt-4'>
            <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>Phone Number *</label>
            <input type='tel' id='phone' required className='w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent' value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          </div>
          <div className='mt-4'>
            <label htmlFor='zipCode' className='block text-sm font-medium text-gray-700 mb-1'>ZIP Code *</label>
            <input type='text' id='zipCode' required pattern='[0-9]{5}' className='w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent' value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
          </div>
          <div className='mt-4'>
            <label htmlFor='projectType' className='block text-sm font-medium text-gray-700 mb-1'>Project Type *</label>
            <select id='projectType' required className='w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent bg-white' value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}>
              <option value=''>Select your project type</option>
              {PROJECT_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className='mt-4'>
            <label htmlFor='description' className='block text-sm font-medium text-gray-700 mb-1'>Briefly describe your project (optional)</label>
            <textarea id='description' maxLength={500} rows={3} className='w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent' placeholder='Tell us about your garage needs, any specific concerns, timeline, etc.' value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            <p className='text-xs text-gray-400 mt-1 text-right'>{formData.description.length}/500</p>
          </div>
          {error && (
            <p className='text-red-600 text-sm mt-2'>{error}</p>
          )}
          <button type='submit' disabled={submitting} className='w-full bg-[#C8875F] hover:bg-[#b3764f] text-white font-semibold py-3 rounded-lg mt-6 transition-colors disabled:opacity-50'>
            {submitting ? 'Submitting...' : 'Get Free Quotes'}
          </button>
          <p className='text-xs text-gray-500 mt-4 text-center leading-relaxed'>
            By clicking &quot;Get Free Quotes,&quot; I consent to be contacted by home service professionals at the phone number and/or email address I provided, including via automated calls, texts, and prerecorded messages, even if my number is on a Do Not Call list. I understand this consent is not a condition of purchase. I also agree to The Garage Guide&apos;s{' '}
            <a href='/terms' className='underline'>Terms of Service</a> and{' '}
            <a href='/privacy' className='underline'>Privacy Policy</a>.
          </p>
        </form>
      </div>
    </section>
  )
}