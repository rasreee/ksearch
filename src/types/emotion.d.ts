import "@emotion/react";

import type { Theme as _Theme } from "@styles/theme";

/**
 * @see https://emotion.sh/docs/emotion-11#theme-type
 */
declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends _Theme {}
}
