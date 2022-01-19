import { PageContent } from '@components/Page';
import searchDataFixture from '@components/search/searchDataFixture';
import { useRouter } from 'next/router';

const findHitById = (id: number) => {
  const found = searchDataFixture.find((data) => data.id === id);
  if (!found) {
    throw new Error('Could not find tag for id: ' + id);
  }
  return found;
};

function HitDetailsPage() {
  const { query } = useRouter();
  const _hitId = query['hitId'];

  if (!_hitId) {
    throw new Error('hitId param is undefined');
  }

  const hitId = parseInt(_hitId as string);

  return (
    <PageContent>
      <h2>{findHitById(hitId).title}</h2>
    </PageContent>
  );
}

export default HitDetailsPage;
