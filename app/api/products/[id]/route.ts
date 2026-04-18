// ini kalo au pake searchparams dan ga perlu di dalam file dynamic route ya
// const { searchParams } = new URL(req.url);

// nah disni kita buat edit dan juga deletenya ya
// tapi emang harus beradar di dalam dynamic route

import { NextRequest, NextResponse } from "next/server";

import { products } from "../_products";

// ingat ya product type itu udha ada di global.d.ts

// ingat ya sekarnag itu parms itu adalah promise
type TypeParam = {
  params: Promise<{
    id: string;
  }>;
};

// WAJIB PAE REQUEST KARENA INI ADLAH KONTARK
// handler(request, context)

export const PUT = async (request: NextRequest, { params }: TypeParam) => {
  const data = await request.json();
  const { id } = await params;
  const index = products.findIndex((product) => product.id == id);

  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  products[index] = {
    ...products[index],
    ...data,
  };

  return NextResponse.json({
    message: "berhasil update product",
    data: products[index],
    status: 200,
  });
};

export const DELETE = async (request: NextRequest, parameter: TypeParam) => {
  // bisa gini atau const { id } = await parameter.params;
  const id = (await parameter.params).id;
  const index = products.findIndex((product: Product) => {
    return id === product.id;
  });
  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  if (index > -1) {
    products.splice(index, 1);
  }

  return NextResponse.json({
    message: "berhasil delete product",
    status: 200,
  });
};

export const GET = async (request: NextRequest, parameter: TypeParam) => {
  const { id } = await parameter.params;

  const index = products.findIndex((product: Product) => {
    return id === product.id;
  });
  console.log(index);
  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    message: "brehasil ambil data " + products[index].id,
    status: 200,
    data: products[index],
  });
};
