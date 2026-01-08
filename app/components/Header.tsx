export function HeaderSection() {
  return (
    <header className='sticky top-0 z-10 min-h-[72px] flex-[0_0_10%] border-b border-white/20 bg-white/30 px-8 py-5 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/20'>
      <div className='text-2xl font-bold tracking-wide text-gray-900 dark:text-white'>
        Nice to see you my dear user!
      </div>
      <p className='text-m font-medium tracking-wide text-gray-500 dark:text-neutral-400'>
        Its time to GIVE US YOUR MONEY
      </p>
    </header>
  )
}
