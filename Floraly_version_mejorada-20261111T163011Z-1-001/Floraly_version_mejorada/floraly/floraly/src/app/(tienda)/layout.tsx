import TiendaHeader from '@/components/TiendaHeader'
import ListaCategorias from '@/components/ListaCategorias';
import Footer from '@/components/Footer';

export default function TiendaLayout({children, } : {children : React.ReactNode;})
{
    return(
        <div className="flex flex-col min-h-screen">
            <TiendaHeader></TiendaHeader>
            <ListaCategorias></ListaCategorias>
            <main className="grow bg-[#D7AC1D]">
            {children}
            </main>
            <Footer></Footer>
        </div>
    )
}
