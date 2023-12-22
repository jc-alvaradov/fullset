import { Card, CardHeader, CardBody } from "@nextui-org/react";

type TProduct = {
	seller: string;
	title: string;
	description: string;
};

type TProps = {
	product: TProduct;
};

export default function Product({ product }: TProps) {
	return (
		<Card className="py-4">
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<p className="text-tiny uppercase font-bold">{product.seller}</p>
				<h4 className="font-bold text-large">{product.title}</h4>
			</CardHeader>
			<CardBody className="overflow-visible py-2">
				<p>{product.description}</p>
			</CardBody>
		</Card>
	);
}
