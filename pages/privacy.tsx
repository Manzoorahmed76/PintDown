import Link from 'next/link'
import { IconArrowLeft } from '@tabler/icons-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <IconArrowLeft size={20} />
          Back to home
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="space-y-4 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-2">Information Collection</h2>
              <p>
                PintDown does not collect or store any personal information from its users.
                The Pinterest URLs you input are only used to process your download requests
                and are not permanently stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Download History</h2>
              <p>
                Your download history is stored locally on your device using localStorage.
                This data never leaves your device and can be cleared at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
              <p>
                We use Pinterest's public API to process download requests. Please refer to
                Pinterest's privacy policy for information about how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p>
                If you have any questions about our privacy policy, please contact us at{' '}
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
