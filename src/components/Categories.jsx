import Cards from './Cards';

const Categories = ({ name, type }) => {
  return (
    <div className="container Categories">
      <h3 className="name-cart">{type}</h3>
      <div className="cards">
        <Cards name={name} />
        <Cards name={name} />
        <Cards name={name} />
        <Cards name={name} />
        <Cards name={name} />
        <Cards name={name} />
        <Cards name={name} />
        <Cards name={name} />
        <Cards name={name} />
        <Cards name={name} />
      </div>
    </div>
  );
};

export default Categories;
