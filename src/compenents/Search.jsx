import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  <input
    onChange={(event) => setSearch(event.target.value)}
    placeholder="quel personage cherchez-vous ?"
  />;
};

export default Search;
