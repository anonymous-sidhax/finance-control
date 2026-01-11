import { SmallCard } from './SmallCard'

export function SmallWidget() {
  return (
    <section className='mx-auto ml-[15%] w-[85%] rounded-2xl border border-white/20 bg-white/40 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/10'>
      <div className='mb-4 text-lg font-bold tracking-wide text-gray-900 dark:text-white'>
        Dashboard Cards
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </section>
  )
}
