import { BigCard } from './BigCard'

export function BigWidget() {
  return (
    <section className='mx-auto w-[85%] rounded-2xl border border-white/20 bg-white/40 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/10'>
      <div className='mb-4 text-lg font-bold tracking-wide text-gray-900 dark:text-white'>
        Analytics
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {/* Left column - 2 larger cards */}
        <div className='col-span-2 flex flex-col gap-4'>
          <BigCard />
          <BigCard />
        </div>
        {/* Right column - 2 smaller cards */}
        <div className='flex flex-col gap-4'>
          <BigCard />
          <BigCard />
        </div>
      </div>
    </section>
  )
}
