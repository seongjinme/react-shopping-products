import { Product } from "../../../types";
import { ProductItem } from "../..";
import * as Styled from "./ProductItemContainer.style";

interface ProductItemContainerProps {
  products: Product[];
  onAddCartItem: (productId: number) => Promise<void>;
  onRemoveCartItem: (productId: number) => Promise<void>;
  checkIsInCart: (productId: number) => boolean;
}

export default function ProductItemContainer({
  products,
  onAddCartItem,
  onRemoveCartItem,
  checkIsInCart,
}: ProductItemContainerProps) {
  return (
    <Styled.Container>
      {products.map((product, index) => (
        <ProductItem
          key={`${product.id}-${index}`}
          product={product}
          isInCart={checkIsInCart(product.id)}
          onClick={() => {
            checkIsInCart(product.id) ? onRemoveCartItem(product.id) : onAddCartItem(product.id);
          }}
        />
      ))}
    </Styled.Container>
  );
}
