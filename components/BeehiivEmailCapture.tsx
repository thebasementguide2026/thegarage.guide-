import Script from 'next/script'

export default function BeehiivEmailCapture() {
  return (
    <section className='my-10'>
      <div style={{ backgroundColor: '#F0F4F8', borderLeft: '4px solid #2B3A4A', padding: '24px 20px' }} className='rounded-r-lg'>
        <p style={{ color: '#2B3A4A' }} className='text-lg font-bold mb-1'>Get Homeowner Tips in Your Inbox</p>
        <p className='text-slate-600 text-sm leading-relaxed mb-4'>
          Seasonal maintenance reminders, repair guides, and money-saving tips from The Garage Guide — delivered free to your inbox.
        </p>
        <iframe
          src='https://subscribe-forms.beehiiv.com/d7389f65-77c3-4b1f-bbff-c04470ac4ae4'
          className='beehiiv-embed'
          data-test-id='beehiiv-embed'
          frameBorder='0'
          scrolling='no'
          style={{ width: '100%', maxWidth: '600px', height: '831px', margin: '0 auto', display: 'block', borderRadius: '0px', backgroundColor: 'transparent', boxShadow: '0 0 #0000' }}
        />
      </div>
      <Script async src='https://subscribe-forms.beehiiv.com/embed.js' strategy='afterInteractive' />
      <Script async src='https://subscribe-forms.beehiiv.com/attribution.js' strategy='afterInteractive' />
    </section>
  )
}
