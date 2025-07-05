import useGetProducts from "../../../hooks/useGetProducts";
import Banner from "./Banner";
import Demo from "./demo";
import Product from "./Product";

const HomePage = () => {
    const { products, setSort, setCategory, loading, setSearch } =
        useGetProducts();
    return (
        <div>
            <Banner setSearch={setSearch} />
            <Product
                products={products}
                setSort={setSort}
                setCategory={setCategory}
                loading={loading}
                setSearch={setSearch}
            />
            <Demo />
        </div>
    );
};

export default HomePage;
