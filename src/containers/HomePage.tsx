import { PageSection } from '@components/Page';
import SearchModalToggle from '@components/search/SearchModalToggle';
import { KeyboardShortcuts } from '@utils/keyboardShortcuts';

const HomePage = () => {
  return (
    <>
      <PageSection>
        <h1>{KeyboardShortcuts.CMD_K} Search</h1>
      </PageSection>
      <PageSection>
        <SearchModalToggle />
      </PageSection>
    </>
  );
};

export default HomePage;
