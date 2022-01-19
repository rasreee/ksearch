import { useKeyCombo } from '@hooks/useKeyCombo';
import { EventKeys } from '@hooks/useKeyPress';
import { createContext, ReactNode, useContext, useState } from 'react';

import SearchModal from './SearchModal';
import { SearchResultData } from './SearchResultData';

interface ISearchModalContext {
  isOpen: boolean;
  onRequestOpen: () => void;
  onRequestClose: () => void;
  onSelect: (selectedSearchResult: SearchResultData) => void;
}

const SearchModalContext = createContext<ISearchModalContext | undefined>(undefined);

export function useSearchModal() {
  const context = useContext(SearchModalContext);
  if (!context) throw new Error('SearchModalContext must be defined to use useSearchModal');
  return context;
}

type SearchModalProviderProps = {
  children: ReactNode;
  onSelect: (selectedSearchResult: SearchResultData) => void;
};

const SearchModalProvider = ({ children, onSelect }: SearchModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onRequestOpen = () => setIsOpen(true);
  const onRequestClose = () => setIsOpen(false);

  useKeyCombo([EventKeys.META, 'k'], onRequestOpen);

  return (
    <SearchModalContext.Provider value={{ isOpen, onRequestOpen, onRequestClose, onSelect }}>
      {children}
      <SearchModal />
    </SearchModalContext.Provider>
  );
};

export default SearchModalProvider;
