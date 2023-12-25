import Product, { TProduct } from "@/components/product";

type TProps = {
  products: TProduct[];
};

export default function ProductList({ products }: TProps) {
  return (
    <div className="grid gap-4 grid-cols-2">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
}
