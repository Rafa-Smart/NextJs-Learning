// import { useState } from "react"

export default function Template({children}:{children:React.ReactNode}){
    // const [counter, setCounter] = useState(0);

    // nah state ini akna hilang jika kita ganti root dan akan di mounted ulang
    // jadi kalo tetep di /, misal / maka tidak akn hilang

    // tapi jika nanti dia ada di /about

    // maka tidka akna hilang di /about/profile
    // /about/nama, dll

    // jadi yang awalannya sama maka sejauh apapun tidak akn hilang
    return(
        <div>
            {/* <button onClick={() => setCounter(counter +1)}>{counter}</button> */}
            ini dari template root
            {children}
        </div>
    )
}



// jadigini kalo tempalate, jadi awalnya tuh kalo engga pake tempate di root misalnya

// maka dia akna panggil si layout dari root, lalu si childrennya ini adalah page daro root
// (kalo aksesnya /)

// tapi kalo aksesnya /about, maka chidldren dari layout root adalah si AboutAlyout
// nahh kalo ga ada baru schildren dari si laytou root ini adalah template
// dan jika masih belum ada maka langusng pageAbout

// jadi walnya itu layout -> template -> page

// jadi kalo ada tiga file AboutLayout, AboutTemplate, AboutPage
// maka nanti yangchildren yang ada di layout / template root adlah
// si page kalo akses /

// dan si aboutAlyout jika akses /about
// yang dimaan aboutlaout itu schildrennya adalah templateAbout dan children dari itu
// adaalh pageAcbout

// ini penjelasnnya
// https://chatgpt.com/c/695359e3-0eb8-8322-889c-9c3cc2f56aa5