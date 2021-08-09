import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Navbar(){
    return(
        <div className="flex justify-between w-10/12 font-bold p-3 font-rubik">
        <div>
            <h1 className="text-xl md:text-3xl">Restaurant</h1>
        </div>
        <div className="text-3xl text-green-400">
            <Link href="/cart"><button><FontAwesomeIcon icon={faCartPlus} /></button></Link>
        </div>
    </div>
    )
}