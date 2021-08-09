import Image from 'next/image'
import Link from 'next/link'
// import food from '../public/1.jpg'
// import drink from '../public/2.jpg'
// import promo from '../public/3.jpg'

const datas = [
    {
        name: 'FOOD',
        gambar: require('../public/1.jpg'),
        link: './foodies'
    },
    {
        name: 'DRINK',
        gambar: require('../public/2.jpg'),
        link: '/drinkes'
    },
    {
        name: 'PROMO',
        gambar: require('../public/3.jpg'),
        link: '/promotion'
    }
]

export default function Firstmenu() {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 w-90 md:w-10/12 w-1/3  text-center font-bold">
            {datas.map((data) => (
                <Link href={data.link}>
                    <div className="shadow-md rounded-xl hover:opacity-30">
                            <Image
                                src={data.gambar}
                            />
                        <p className="p-2">{data.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}