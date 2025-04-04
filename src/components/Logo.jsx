import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img
        src="https://ucarecdn.com/cbe92d7c-b809-4939-9363-d2bd77da24b6/-/preview/360x360/"
        alt="Logo"
        width={width}
      />
    </div>
  );
}

export default Logo;
