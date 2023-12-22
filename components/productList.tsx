import Product from "@/components/product";

export default function ProductList({ products }) {
	return products.map((product) => (
		<Product product={product} key={product.key} />
	));
}
