import searchDataFixture from '@components/search/searchDataFixture';
import { SearchResultData } from '@components/search/SearchResultData';
import { ParsedUrlQuery } from 'querystring';

export type NormalizedQuery<T extends Record<string, string | string[] | undefined>> = {
  [Properties in keyof T as string]: string;
};

export function normalizeQueryParam<T extends string = string>(
  value: string | string[] | undefined
): T {
  return value as T;
}

export function getHitFromQuery(query: ParsedUrlQuery): SearchResultData | null {
  const hitId = 'hitId' in query ? normalizeQueryParam<string>(query.hitId) : null;

  if (!hitId) {
    console.log('❗ Error: hitId param was undefined');
    return null;
  }

  if (!Number.isInteger(parseInt(hitId))) {
    console.log('❗ Error: hitId must be an integer. Got hitId=' + hitId);
    return null;
  }

  const found = searchDataFixture.find((data) => data.id === parseInt(hitId));

  if (!found) {
    console.log(`❗ Error: Could not find hit for id=${hitId} in fixtures...`);
    return null;
  }

  console.log(`✅ Got hit for hitId=${hitId}: `, found);

  return found;
}
