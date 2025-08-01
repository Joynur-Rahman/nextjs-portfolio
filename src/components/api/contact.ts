// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  try {
    const data = req.body

    const access_key = process.env.WEB3FORMS_SECRET_KEY

    if (!access_key) {
      return res.status(500).json({ success: false, message: 'API key not configured' })
    }

    // Forward request to Web3Forms with the secret key
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...data,
        access_key,
      }),
    })

    const result = await response.json()
    res.status(response.status).json(result)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
