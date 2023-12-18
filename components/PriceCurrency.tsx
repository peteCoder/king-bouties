"use client";

import { priceFomatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface PriceCurrencyProps {
  value: string | number;
}

const PriceCurrency = ({ value }: PriceCurrencyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="font-semibold">{priceFomatter.format(Number(value))}</div>
  );
};

export default PriceCurrency;
