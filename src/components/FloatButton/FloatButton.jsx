import { forwardRef } from 'react'
import clsx from 'clsx'
import s from './FloatButton.module.scss'

const FloatButton = forwardRef(function (
  {
    Icon,
    shade = 'v1',
    textIsCentered,
    className,
    children,
    ...otherProps
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={clsx(
        s.button,
        textIsCentered && s.text_centered,
        !textIsCentered && Icon && s.icon,
        s[shade],
        className
      )}
      {...otherProps}
    >
      {children}
      {Icon && <Icon />}
    </button>
  )
})

export default FloatButton
