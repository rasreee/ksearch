import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface ISearchModalContext {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const SearchModalContext = createContext<ISearchModalContext | undefined>(undefined)

export const SearchModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  return (
    <SearchModalContext.Provider value={{ open, setOpen }}>{children}</SearchModalContext.Provider>
  )
}
