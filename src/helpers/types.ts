type Property = {
  name: string;
  value: string;
};

interface Price {
  UZS: number;
  USD: number;
  ratio: {
    "UZS/USD": number;
  };
  first: string;
}

interface Stock {
  id: string;
  tracking: boolean;
  countable: boolean;
  composite: boolean;
  properties: Property[];
  sellPrice: Price;
  supplyPrice: Price;
  imported: string;
  impport: number;
  originalImport: number;
  transfer: null;
  importCount: string;
  transferCount: string;
  originalImportCount: string;
  supplier: number;
  count: number;
  location: number;
  expirationDate: string | null;
}

interface Urls {
  "50x_"?: string | null;
  "100x_"?: string | null;
  "150x_"?: string | null;
  "300x_"?: string | null;
  "500x_"?: string | null;
  "800x_"?: string | null;
  original?: string | null;
}

interface Image {
  id: number;
  brand: number;
  zone: number;
  originalName: string;
  name: string;
  extension: string;
  mimeType: string;
  createdAt: string;
  updatedAt: string;
  sort: number;
  urls: Urls;
}

export interface ProductType {
  id: number;
  taxable: boolean;
  shippable: boolean;
  countable: boolean;
  cookable: boolean;
  composite: boolean;
  scalable: boolean;
  tracking: boolean;
  sellable: boolean;
  vatPercent: number | null;
  name: string;
  technicalCardId: number | null;
  writeOffMethod: number;
  countInBox: number | null;
  zone: number;
  unit: string;
  properties: Property[];
  videos: any[];
  productProperties: Property[];
  barcode: string;
  showMarket: boolean;
  lastUpdateTime: string;
  technicalCard: boolean;
  baseUnitRatio: any[];
  product: number;
  sku: string;
  crossSellTags: any[] | null;
  category: number;
  supplier: string;
  supplierId: number;
  productName: string;
  brand: number;
  description: string;
  importProperties: any[];
  recSellPrice: number | null;
  recSupplierPrice: number | null;
  correctionType: number;
  shortDescription: string;
  stocks: Stock[];
  images: Image[];
  analogs: any[];
  modifiers: any[];
  tags: any[];
}
