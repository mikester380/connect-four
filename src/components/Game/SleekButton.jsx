import { forwardRef } from 'react'
import clsx from 'clsx'
import s from './SleekButton.module.scss'

const SleekButton = forwardRef(function (
  { children, className, ...otherProps },
  ref
) {
  return (
    <button
      className={clsx(s.button, className)}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
  )
})

export default SleekButton
