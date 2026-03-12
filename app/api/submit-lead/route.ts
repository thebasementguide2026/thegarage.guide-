import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      zipCode,
      taskIds,
      description,
      trustedFormCertUrl,
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !zipCode || !taskIds || taskIds.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const NX_ACCESS_KEY = process.env.NX_ACCESS_KEY || 'b8d8200d3b'
    const NX_USER_ID = process.env.NX_USER_ID || '11550'

    // Submit a lead for each task ID
    const results = []
    for (const taskId of taskIds) {
      const params = new URLSearchParams({
        nx_access_key: NX_ACCESS_KEY,
        nx_userId: NX_USER_ID,
        f_name: firstName,
        l_name: lastName,
        email: email,
        phone: phone.replace(/\D/g, ''),
        zipcode: zipCode,
        task_id: taskId.toString(),
        description: description || '',
        trusted_form_cert_url: trustedFormCertUrl || '',
      })

      const response = await fetch(
        `https://api.networx.com/lead/add?${params.toString()}`,
        { method: 'GET' }
      )

      const result = await response.text()
      results.push({ taskId, result })
    }

    return NextResponse.json({ success: true, results })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}