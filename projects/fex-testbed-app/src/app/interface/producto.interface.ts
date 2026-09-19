  export interface IProducto {
  id:          string;
  category:    string;
  name:        string;
  description: string;
  tags:        string[];
  sku:         string;
  barcode:     string;
  brand:       string;
  vendor:      string;
  stock:       number;
  reserved:    number;
  cost:        number;
  basePrice:   number;
  taxPercent:  number;
  price:       number;
  weight:      number;
  thumbnail:   null | string;
  images:      string[];
  active:      boolean;
}
