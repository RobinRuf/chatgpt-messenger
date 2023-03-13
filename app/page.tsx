import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center text-white h-screen px-2'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-3'>
            <SunIcon className='h-8 w-8' />
            <h2>Examples</h2>
          </div>

            <div className='space-y-2'>
            <p className='infoText'>"Explain Something to me"</p>
            <p className='infoText'>"What is the difference between a dog and a cat?"</p>
            <p className='infoText'>"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-3'>
            <BoltIcon className='h-8 w-8' />
            <h2>Capabilities</h2>
          </div>

            <div className='space-y-2'>
            <p className='infoText'>Original OpenAI API like ChatGPT</p>
            <p className='infoText'>Messages are stored in a Firebase Firestore.</p>
            <p className='infoText'>Always free to use for everyone - no Paid Plans</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-3'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2>Limitations</h2>
          </div>

            <div className='space-y-2'>
            <p className='infoText'>May occasionally generate incorrect information</p>
            <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
            <p className='infoText'>Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
