import { useQuery } from "@tanstack/react-query";
import { Input, Table, Typography, type TableColumnsType } from "antd";
import { useMemo, useState } from "react";
import type { ProductType } from "../../helpers/types";
import { getProducts } from "../../api/products";

const getColumns = (query: {
  page: number;
  limit: number;
}): TableColumnsType<ProductType> => [
  {
    title: "#",
    dataIndex: "id",
    key: "index",
    width: 100,
    align: "center",
    render: (_, __, i) => (query.page - 1) * query.limit + i + 1,
  },
  {
    title: "product name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "barcode",
    dataIndex: "barcode",
    key: "phone",
    render: (_, product) => `${product.barcode}`,
  },
  {
    title: "description",
    dataIndex: "description",
    key: "index",
    width: 150,
    render: (_, product) => `${product.description?.slice(0, 50)}...`,
  },
  {
    title: "last update time",
    dataIndex: "lastUpdateTime",
    key: "lastUpdateTime",
  },
  {
    title: "unit",
    dataIndex: "unit",
    key: "unit",
  },
];

const initQuery = {
  page: 1,
  limit: 10,
};

interface ProductsProps {
  withToolbar?: boolean;
}

export default function Products({ withToolbar = false }: ProductsProps) {
  const [query, setQuery] = useState(initQuery);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isFetching } = useQuery({
    queryKey: ["products", withToolbar ? "all" : query],
    queryFn: () =>
      getProducts({
        page: query.page,
        size: withToolbar ? 10000 : query.limit,
      }),
  });

  const filteredItems = useMemo(() => {
    const items = Array.isArray(data?.items) ? data.items : [];
    const term = searchTerm.trim().toLowerCase();

    if (!term) return items;

    return items.filter((item: ProductType) =>
      item.productName.toLowerCase().includes(term)
    );
  }, [data, searchTerm]);

  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        Products
      </Typography.Title>

      {withToolbar && (
        <Input.Search
          placeholder="Search products..."
          allowClear
          onSearch={(value) => setSearchTerm(value)}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: 16, maxWidth: 300 }}
        />
      )}
      <Table<ProductType>
        bordered
        rowKey="id"
        columns={getColumns(query)}
        dataSource={filteredItems}
        loading={isFetching}
        onChange={(p) =>
          setQuery({
            page: p.current!,
            limit: p.pageSize!,
          })
        }
        pagination={
          withToolbar
            ? false
            : {
                total: data?.total_count,
                current: query.page,
                pageSize: query.limit,
                pageSizeOptions: ["10", "20", "30", "40", "50"],
              }
        }
        scroll={{ x: "auto" }}
      />
    </>
  );
}
