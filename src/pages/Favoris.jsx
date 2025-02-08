import Cookie from "js-cookie";

const Favoris = () => {
  const tabFromCookie = JSON.parse(Cookie.get(`favoris`));
  // console.log(tabFromCookie);

  return (
    <div className="favoris container">
      {tabFromCookie.map((element) => {
        console.log(element);
        return (
          <section key={element._id} className="personage description">
            <div>{element.name}</div>
            <div>
              <img
                src={element.thumbnail.path + "." + element.thumbnail.extension}
                alt={element.name}
              />
            </div>
            <p>{element.description}</p>
          </section>
        );
      })}
    </div>
  );
};
export default Favoris;
