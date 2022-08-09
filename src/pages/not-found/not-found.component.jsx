import React, { memo } from 'react';

import { NOT_FOUND_LABEL } from './not-found.constants';

function NotFoun() {
  return (
    <main style={{ padding: '1rem' }}>
      <p>{NOT_FOUND_LABEL}</p>
    </main>
  );
}

export default memo(NotFoun);
