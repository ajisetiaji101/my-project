import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';


export default function Foods() {

    const foods = [
        {
            name: 'Bakso',
            price: 'Rp. 15.000,-',
            gambar: require('../../public/bakso.jpg')
        },
        {
            name: 'Fried Rice',
            price: 'Rp. 15.000,-',
            gambar: require('../../public/friedrice.jpg')
        },
        {
            name: 'Sate',
            price: 'Rp. 15.000,-',
            gambar: require('../../public/sate.jpg')
        },
        {
            name: 'Pempek',
            price: 'Rp. 15.000,-',
            gambar: require('../../public/pemek.jpg')
        }
    ]

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 w-90 w-10/12 font-bold font-rubik">
            {foods.map((food) => (
                <div className="bg-gray-200 shadow-xl rounded-xl">
                    <div className="hover:opacity-30 p-2">
                        <Image
                            src={food.gambar}
                        />
                    </div>
                    <div className="grid grid-cols-1 justify-items-center items-center md:text-xl p-2">
                        <span>{food.name} </span>
                        <span>{food.price}  </span>
                        <div className="text-3xl text-green-300 space-x-3">
                            <button> <FontAwesomeIcon icon={faPlusSquare} /></button>
                            <button> <FontAwesomeIcon icon={faMinusSquare} /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}