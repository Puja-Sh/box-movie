import React from 'react';

const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <div>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>
          Premiered: {premiered} {network ? `on ${network.name}` : null}
        </p>
      </div>
    </div>
  );
};

export default Details;
