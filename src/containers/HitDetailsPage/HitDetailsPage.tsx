import { PageContent } from '@components/Page';
import { Redirect } from '@components/Redirect';
import { useRouter } from 'next/router';

import { getHitFromQuery } from './helpers';

export function HitDetailsPage() {
  const { query } = useRouter();
  const hit = getHitFromQuery(query);

  if (!hit) {
    return <Redirect to="/" />;
  }

  return (
    <PageContent>
      <h2>{hit.title}</h2>
    </PageContent>
  );
}
