import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (money: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    maximumFractionDigits: 2,
    currency: "USD",
  });

  return formatter.format(money);
};

export const priceFomatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
