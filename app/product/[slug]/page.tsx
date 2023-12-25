import Product from "@/components/product";

type TProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: TProps) {
  // const product = getProductById(params.slug);
  const product = {
    id: "product-id-1",
    title: "Producto 4",
    seller: "vendedor-1",
    description: "",
  };
  return <Product {...product} />;
}
