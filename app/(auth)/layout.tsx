export default function LayoutAuth({children}:{children:React.ReactNode}){
    // jadi ini sama aja dan ini tuh isinya children itu dari si 
    // rutignya misal /register, maka childrennya ini register, beigut juga yang logino

    // dan ingat kenapa bisa lansung / tanpa authnya ini di akses
    // karen kita pake grouping ()
    return (
        <div>
            <h1>Ini dari layout auth</h1>
            {children}
        </div>
    )
}