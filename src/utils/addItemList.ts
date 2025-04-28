import React from 'react'

export function addItemList<T>(
    e: React.MouseEvent<HTMLButtonElement>,
    setState: React.Dispatch<React.SetStateAction<T[]>>,
    newItem: T
) {
  e.preventDefault()
  setState((prev) => [...prev, newItem])
}
