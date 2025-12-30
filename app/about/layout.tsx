import Link, { LinkProps } from "next/link";

// nah disni kita perlu type untuk childrennya ya jadi gini aja
// kita buat type global di routes.d.ts disitu sudah dikasih
// untuk type dari layoutnya

// ini penjelasannya https://chatgpt.com/c/69524525-f2e0-8323-87ef-17318f53817a

// export default function AboutLayout({children}):LayoutProps<React.ReactNode>{

// }

// itu salah karena tidak bener

// nah jadi layoutprops ini itu dia type genereicnya adlah sebuah string
// nah utuk akses si childrennya itu kan harus lewat props, makanya gini juga bisa
// export default function AboutLayout(props: LayoutProps<"/">) {
//   return (
//     <section>
//       {props.children}
//     </section>
//   );
// }

// tapi kalo mau destructuring gini juga bisa
// langsung tia descturirung dari props
// nah disni itu children akan otomatis berisi dari seluruh folder route dari bout ini
// export default function AboutLayout({children}: LayoutProps<'/'>){
//     return (
//         <section>
//             <h4>
//                 ini header layout about
//             </h4>
//             {children}
//             <h4>
//                 ini footer layout about
//             </h4>
//         </section>
//     )
// }

// Apakah children berisi komponen di page.tsx?
// YA, BENAR, tetapi lebih tepatnya:
// children berisi hasil render dari route aktif di bawah layout tersebut
// export default function AboutLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <br />
//       <section>
//         <h4>ini header layout about</h4>
//         {children}
//         <h4>ini footer layout about</h4>
//       </section>
//       <br />
//     </>
//   );
// }

// app/
//  ├─ layout.tsx          (Root Layout)
//  ├─ page.tsx            (/)
//  └─ about/
//      ├─ layout.tsx      (About Layout)
//      ├─ page.tsx        (/about)
//      └─ user/
//          ├─ layout.tsx  (User Layout)
//          └─ page.tsx    (/about/user)

// # ini benaer 100 persen
// jadi gini berati di komponen userlayout childrennya itu adalah si userPage, ketika di aboutLayout maka childrennya ini lansung si userLayout karena userlayout ini di childrennya suah ada userPage. itu dulu apakah bener pernyataan sya seperti ini ?

// # nah untuk ini apa penjelasan saya di bawah / bis juga lansung lia aja di ai
// kemudian gini di layout yang level root, itu dia childrennya adalh si komponen page dari root app, atau komponen aboutLayout ?

// jadi si root layout ini si childrennya itu tergantung
// jadi kalo dia akses / saja, maka childrennya it isinya adlah si page
// yang levelnya itu di root app

// tapi kalo misalakn dia akses /about, maka dia si childrennya itu adalah
// si aboutLayout (jika ada), kalo ga ada berati lansung aja AboutPage (page.tsx)
// https://chatgpt.com/c/695248c4-32b4-8322-a3d5-19277bc8dfab

// Lebih presisi jika kalimat terakhir dipahami seperti ini:
// Jika di about/ tidak ada layout.tsx, maka:
// Next.js tidak membuat node layout
// RootLayout.children langsung berisi hasil render about/page.tsx
// Secara mental model:
// Bukan “page menggantikan layout”
// Tapi layout tersebut memang tidak ada, jadi dilewati

// NAH PENTING, begitu juga untuk yang about dna lainnya ya
// jasi misal di dalam folder about kita punya lyout dan page
// ddan teryata kita juga punya folder profile
// nah jadi ada dua kemunkinan

// jika kita akses ...(route sebelumnya)/ -> maka maka akan jalankan si layout
// yang di panggil di layout nya si rooute, dan berati cihldred dari layoutAbout
// adalah si pageAbout

// tapi jika kita akses ...(route sebelumnya)/about/profile
// maka berati layoutnya akan nesting, jadi layoutnya ini akna selalu di panggil
// dan berati children yang ada dilayoutAbot ini isinya adalah layoutProfile (jika ada)
// tai jika ga ada maka akn alangsung ke page.tsx dari profile

// jadi navbar ini akna selalu ada di route yang ada /aboutnya
// jadi untuk seluruh route yang aktif di bawah /about ini

// seperti profile
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-800">
        <ul className="flex-col ml-5">
          <Link href={"/"}>
            <li className="mb-6 text-blue-300 cursor-pointer">Home</li>
          </Link>
          <Link href={"/about"}>
            <li className="mb-6 text-blue-300 cursor-pointer">About</li>
          </Link>
          <Link href={"/about/profile"}>
            <li className="mb-6 text-blue-300 cursor-pointer">Profile</li>
          </Link>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
