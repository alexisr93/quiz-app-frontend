import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

function ProblemNav() {
  let active = 1;
  let items = [];

  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const pagination = (
    <div>
      <Pagination size="lg">{items}</Pagination>
      <br />
    </div>
  );

  return (
    <div>
      {pagination}
    </div>
  );
}

export default ProblemNav;
