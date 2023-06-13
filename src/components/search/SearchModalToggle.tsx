import { KbdSymbols } from "@utils/kbdSymbols";

import { useSearchModal } from "./SearchModalContext";
import * as S from "./SearchModalToggle.styles";

const SearchModalToggle = () => {
  const searchModal = useSearchModal();

  return (
    <S.Button onClick={searchModal.onRequestOpen}>
      <span>Quick search...</span>
      <S.Kbd>
        <span>{KbdSymbols.CMD}</span>
        <span>K</span>
      </S.Kbd>
    </S.Button>
  );
};
export default SearchModalToggle;
