import { Modal } from '@components/Modal';
import { useEffect, useState } from 'react';

import { getSearchResultsForQuery } from './getSearchResultsForQuery';
import SearchBar from './SearchBar';
import { useSearchModal } from './SearchModalProvider';
import { SearchResultData } from './SearchResultData';
import SearchResults from './SearchResults';

const SearchModal = () => {
  const { onSelect, ...modalProps } = useSearchModal();

  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<SearchResultData[]>([]);

  useEffect(() => {
    getSearchResultsForQuery(query).then(setHits);
  }, [query]);

  return (
    <Modal {...modalProps}>
      <SearchBar query={query} onQueryChange={setQuery} />
      <SearchResults data={hits} onSelect={onSelect} />
    </Modal>
  );
};

export default SearchModal;
