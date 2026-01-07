export function SmallWidget() {
  return (
    <section className='mx-auto min-h-[180px] w-[85%] rounded-xl border border-gray-200/70 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900'>
      <div className='text-base font-semibold text-gray-900 dark:text-neutral-100'>
        Small Widget
      </div>
      <p className='text-sm text-gray-500 dark:text-neutral-400'>
        Use this area for quick stats or a compact chart.
      </p>
    </section>
  )
}
