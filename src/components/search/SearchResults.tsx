import SearchResult from './SearchResult';
import { SearchResultData } from './SearchResultData';

interface SearchResultsProps {
  data: SearchResultData[];
  onSelect: (selectedItem: SearchResultData) => void;
}

const SearchResults = ({ data, onSelect }: SearchResultsProps) => {
  const handleSelect = (selectedItem: SearchResultData) => () => onSelect(selectedItem);

  return (
    <ul>
      {data.map((searchResult: SearchResultData) => (
        <SearchResult key={searchResult.id} onClick={handleSelect(searchResult)}>
          {searchResult.title}
        </SearchResult>
      ))}
    </ul>
  );
};

export default SearchResults;
