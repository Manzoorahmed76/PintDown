import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { url } = req.query

  if (!url) {
    return res.status(400).json({ success: false, error: 'URL is required' })
  }

  try {
    const response = await fetch(`https://pinterest-media-downloader.bjcoderx.workers.dev/?url=${url}`)
    const data = await response.json()

    if (!data.status || !data.media_url) {
      return res.status(500).json({ success: false, error: 'Invalid response from Pinterest API' })
    }

    return res.status(200).json({
      success: true,
      message: "Successfully retrieved JPG content",
      data: {
        type: "JPG",
        quality: "Original",
        url: data.media_url
      }
    })
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to fetch Pinterest content' })
  }
}
