import { NextRequest, NextResponse } from "next/server";
import { users } from "./_users";

export const POST = async (request: NextRequest) => {
  try {
    const data: User = await request.json();

    if (!data.email || !data.password || !data.fullname) {
      return NextResponse.json(
        { message: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    const isExist = users.find((u) => u.email === data.email);
    if (isExist) {
      return NextResponse.json(
        { message: "Email sudah digunakan" },
        { status: 409 }
      );
    }

    users.unshift(data);

    return NextResponse.json(
      {
        message: "Berhasil register",
        user: data,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};