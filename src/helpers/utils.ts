import type { MenuProps } from "antd";

type ExpiresInput = Date | string | number;

export const getToken = (): string | null => {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));
  if (!match) return null;
  return decodeURIComponent(match.split("=")[1]);
};

export const setToken = (
  token: string,
  expiresAt?: ExpiresInput,
  lifetimeSec?: number
): void => {
  let expiry: Date | undefined;

  if (expiresAt != null) {
    expiry = expiresAt instanceof Date ? expiresAt : new Date(expiresAt);
  } else if (lifetimeSec != null) {
    expiry = new Date(Date.now() + lifetimeSec * 1000);
  }

  let cookie = `token=${encodeURIComponent(token)}; path=/;`;
  if (expiry) {
    cookie += ` expires=${expiry.toUTCString()};`;
  }
  document.cookie = cookie;
};

export const removeToken = (): void => {
  document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
};

export const getOpenKeys = (
  items: MenuProps["items"],
  path: string
): string[] => {
  const openKeys: string[] = [];

  const traverse = (menuItems: MenuProps["items"], parentKey?: string) => {
    if (!menuItems) return;

    for (const item of menuItems) {
      if (!item) continue;

      if ("key" in item && item.key === path && parentKey) {
        openKeys.push(parentKey);
      }

      if ("children" in item && item.children) {
        traverse(item.children, String(item.key));
      }
    }
  };

  traverse(items);
  return openKeys;
};

export const errorMessage = (data: any) => {
  if (data.error) return data.error;
  else if (data.errors) return Object.values(data.errors).join("\n");
  else return data.message;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};
