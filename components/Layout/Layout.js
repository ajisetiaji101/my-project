import Cart from '../Cart/Cart'
import Navbar from '../Navbar/Navbar'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Navbar />
            {children}
        </div>
    )
}