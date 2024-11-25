import { useLayoutEffect } from 'react'

export default function useBackground(color) {
  useLayoutEffect(() => {
    const body = document.body
    body.style.background = color

    return () => (body.style.background = '')
  }, [])
}
