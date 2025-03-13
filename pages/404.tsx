import Link from 'next/link'
import { IconArrowLeft } from '@tabler/icons-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
        <IconArrowLeft size={20} />
        Back to home
      </Link>
    </div>
  )
}
