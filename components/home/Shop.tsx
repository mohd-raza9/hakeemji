import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "./Products";
import { products } from "@/data/products";

export default function Shop() {
  return (
    <section id="shop" className="bg-[#F8F6F1] py-20">
      <Container>
        <SectionTitle
          title="Premium"
          highlight="Shop"
          subtitle="Premium Unani medicines prepared with authentic herbs."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}