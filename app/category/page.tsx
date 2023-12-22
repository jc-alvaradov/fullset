import ProductList from "@/components/productList";

const categories = [
	{
		products: [
			{
				key: "productId",
				seller: "vendedor",
				title: "Producto",
				description: "body",
			},
			{
				key: "productId",
				seller: "otro-vendedor",
				title: "Producto n 2",
				description: "body body",
			},
		],
	},
];

export default function Page() {
	return categories.map((category) => (
		<ProductList products={category.products} />
	));
}
