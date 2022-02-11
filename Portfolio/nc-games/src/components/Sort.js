const Sort = (props) => {
  const { setSort } = props;

  const sortOrder = (order) => {
    setSort((current) => {
      const newSortOrder = `?sort_by=${order}`;
      if (current === newSortOrder) return current + "&order=asc";
      return newSortOrder;
    });
  };

  return (
    <div className="Sort">
      <button onClick={() => sortOrder("created_at")}>Date</button>
      <button onClick={() => sortOrder("votes")}>Votes</button>
      <button onClick={() => sortOrder("owner")}>User</button>
    </div>
  );
};

export default Sort;
