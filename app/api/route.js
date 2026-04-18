// Dalam satu file itu kita bisa memasukkan beberapa fungsi gitu, bisa GET atau POST. Dan juga enggak boleh pakai export default, karena tidak akan dibaca. Jadi, ini kan emang function, jadi export aja. Kalau misalkan di file tersebut, kita punya dua function, get dan post, maka entar di file halaman kita bisa nge-fetch data, misalkan kita itu methodnya post, maka akan cari ke route itu. Yang methodnya post, kalau enggak ada ya not allowed gitu, enggak ada. Terus juga yang PUT nanti berarti pakai dynamic route.

import { NextResponse } from "next/server";

// ini kalo yang put / delete
// app/
//  └── api/
//       └── products/
//            ├── route.ts        → GET (list), POST (create)
//            └── [id]/
//                 └── route.ts   → GET (detail), PUT, DELETE

export const GET = async () => {
  return NextResponse.json({
    status: 200,
    data: {
      id: 1,
      nama: "produk 1",
    },
  });
};


// ini yang akan kita dapet ketika kita ke url http://localhost:3000/api
// {
//   "status": 200,
//   "data": {
//     "id": 1,
//     "nama": "produk 1"
//   }
// }