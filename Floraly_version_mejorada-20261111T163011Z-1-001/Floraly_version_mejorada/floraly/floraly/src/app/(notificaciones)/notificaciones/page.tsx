import Link from "next/link"

export default async function Home(){
    return(
        <div className="flex">
            
            <p>esto de momento es el contenido de las notificaciones.......</p>
            
            
            <Link href="/" className="border-zinc-950 border-2 bg-amber-400 p-4">Volver</Link>
            
        </div>
    )
}