import React from 'react'

const Footer = () => {
  return (
    <div className='text-sm py-4 px-12 font-medium text-balance leading-loose text-center text-muted-foreground flex flex-row gap-2 w-full border-t border-muted'>
        <p>Built by <a href='./' className='underline underline-offset-4'>shadcn</a>. The source code is available on <a href='https://www.github.com' className='underline underline-offset-4'>GitHub</a>.</p>
    </div>
  )
}

export default Footer