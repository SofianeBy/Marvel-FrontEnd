import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const tab = [];

  for (let i = 0; i < emojiList.length; i++) {
    const emoji = emojiList[i];
    if (emoji.keywords.includes(search)) {
      if (tab.length < 20) {
        tab.push(<Line emoji={emoji} key={emoji.title} />);
      } else {
        break;
      }
    }
  }

  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
      {tab}
      <Footer />
    </div>
  );
};

export default Search;
