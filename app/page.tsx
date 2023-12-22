import { Button } from "@nextui-org/button";
import ProductList from "@/components/productList";

const categories = [
	{
		products: [
			{
				seller: "vendedor",
				title: "Producto",
				description: "body",
			},
		],
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Hello, Home Page!</h1>
			<Button>Click me</Button>
			{categories.map((category) => (
				<ProductList products={category.products} />
			))}
		</main>
	);
}
