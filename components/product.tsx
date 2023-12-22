import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

export type TProduct = {
	id: string;
	seller: string;
	title: string;
	description: string;
};

export default function Product(product: TProduct) {
	return (
		<Card className="py-4">
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<p className="text-tiny uppercase font-bold">{product.seller}</p>
				<h4 className="font-bold text-large">{product.title}</h4>
			</CardHeader>
			<CardBody className="overflow-visible py-2">
				<p>{product.description}</p>
				<Button>Click me</Button>
			</CardBody>
		</Card>
	);
}
