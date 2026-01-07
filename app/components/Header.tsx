export function HeaderSection() {
  return (
    <header className='bg-background/70 sticky top-0 z-10 min-h-[72px] flex-[0_0_10%] border-b border-gray-200/70 px-8 py-5 backdrop-blur-md dark:border-neutral-800'>
      <div className='text-lg font-semibold text-gray-900 dark:text-neutral-100'>
        Header
      </div>
      <p className='text-sm text-gray-500 dark:text-neutral-400'>
        Place filters, breadcrumbs, or summary info here.
      </p>
    </header>
  )
}
