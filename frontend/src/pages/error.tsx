import { Link } from 'react-router-dom'

export function ErrorPage() {
  return (
    <section className='flex flex-col justify-center items-center my-40'>
      <div className='flex flex-col justify-between items-center mb-24'>
        <div className='h-40 w-[829px]'>
          <h1 className='text-8xl font-medium tracking-wide text-center'>
            404 Not Found
          </h1>

          <p className='text-center p-10'>
            Your visited page not found. You may go home page.
          </p>
        </div>
      </div>

      <button
        type='submit'
        className='bg-[#872341] text-white py-2 px-4 rounded hover:bg-rose-800 h-14 w-60'
      >
        <Link to='/'> Back to home page</Link>
      </button>
    </section>
  )
}
