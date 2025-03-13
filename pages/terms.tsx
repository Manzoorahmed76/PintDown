import Link from 'next/link'
import { IconArrowLeft } from '@tabler/icons-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <IconArrowLeft size={20} />
          Back to home
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="space-y-4 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
              <p>
                By accessing and using PintDown, you accept and agree to be bound by the
                terms and conditions outlined in this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Use License</h2>
              <p>
                PintDown is for personal, non-commercial use only. You agree not to use
                this service for any illegal purposes or to violate Pinterest's terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
              <p>
                PintDown is provided "as is" without any warranties. We are not responsible
                for any downloaded content or how it is used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Limitations</h2>
              <p>
                We reserve the right to modify or discontinue the service at any time
                without notice. We shall not be liable for any damages arising from the
                use of this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p>
                For any questions regarding these terms, please contact us at{' '}
                <a href="mailto:support@botzaku.eu.org" className="text-blue-600 hover:underline">
                  support@botzaku.eu.org
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
