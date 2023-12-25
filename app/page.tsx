import ProductList from "@/components/productList";

const categories = [
  {
    id: "category-1",
    products: [
      {
        id: "product-id1",
        seller: "vendedor",
        title: "Producto",
        description: "body",
      },
      {
        id: "product-id2",
        seller: "otro-vendedor",
        title: "Producto n 2",
        description: "body body",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="">
      {categories.map((category) => (
        <ProductList products={category.products} key={category.id} />
      ))}
    </main>
  );
}
