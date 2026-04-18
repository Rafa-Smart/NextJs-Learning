import { headers } from "next/headers";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
("use-client");
export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [dataForm, setDataForm] = useState({
    id: Date.now().toString(),
    email: "",
    fullname: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const options: RequestInit = {
        method: "POST", // Metode HTTP: GET, POST, PUT, DELETE, dll.
        headers: {
          Accept: "application/json", // Memberitahu server kita ingin data JSON
          "Content-Type": "application/json", // Memberitahu server data yang dikirim adalah JSON
          Authorization: "Bearer TOKEN_ANDA", // Optional: Header untuk otentikasi
        },
        body: JSON.stringify(dataForm),
        mode: "cors", // Mode permintaan: 'cors', 'no-cors', atau 'same-origin'
        cache: "default", // Pengaturan cache
        redirect: "follow", // Penanganan pengalihan otomatis
      };
      const response = await fetch("http://localhost:3000/api/users", options);
      const data = await response.json();
      if (!response.ok) {
        // nah ini brau kna masukk cactch, karena catchiut gabis kalo hany rturn error,tapi harus yang lempar error
        throw new Error(data.message);
      }
      await Swal.fire({
        icon: "success",
        title: "success",
        text: data.message,
      });
    } catch (e) {
      await Swal.fire({
        icon: "error",
        title: "error",
        text: e instanceof Error ? e.message : String(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 rounded-2xl p-4">
        <form
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="fullname"
                onChange={(e) => handleChange(e)}
                name="fullname"
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                onChange={(e) => handleChange(e)}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                onChange={(e) => handleChange(e)}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
