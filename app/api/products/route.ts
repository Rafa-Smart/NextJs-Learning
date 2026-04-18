import { NextRequest, NextResponse } from "next/server";

import { products } from "./_products";

// jadi gini, kita wajib pake request:NextRequest ya
// WAJIB PAE REQUEST KARENA INI ADLAH KONTARK
// handler(request, context)
export const GET = async (request: NextRequest) => {
  return NextResponse.json({
    status: 200,
    total_products: products.length,
    data: products,
  });
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  products.push(data);
  return NextResponse.json({
    status: 201,
    message: "Product berhasil di buat",
    data,
  });
};
