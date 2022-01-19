import { HTMLAttributes, ReactNode } from 'react';

interface SearchResultProps extends HTMLAttributes<HTMLElement> {
  onClick: () => void;
  children: ReactNode;
}

const SearchResult = ({ children, onClick, ...props }: SearchResultProps) => {
  return (
    <li {...props}>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default SearchResult;
