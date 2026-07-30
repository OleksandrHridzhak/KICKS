export interface VariantSizeDto {
  id: string;
  size: number;
  inStock: number;
}

export interface VariantDto {
  id: string;
  color: string;
  variantName: string;
}

export interface ProductVariantResponseDto {
  id: string;
  name: string;
  description: string;
  color: string;
  price: number;

  variantSizes: VariantSizeDto[];
  photos: string[];

  variants: VariantDto[];
}
