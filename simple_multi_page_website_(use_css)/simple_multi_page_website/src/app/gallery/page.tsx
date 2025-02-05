import Image from "next/image";
export default function Gallery() {

    const gallery_Data = [
        {
            id: 1,
            name: 'Summer',
            description: 'The hottest season, perfect for sunny days, ....',
            image: '/gallery_summer.jpg'
        },
        {
            id: 2,
            name: 'Winter',
            description: 'The coldest season, bringing snowfall, chilly winds, ....',
            image: '/gallery_winter.jpg'
        },
        {
            id: 3,
            name: 'Autumn',
            description: 'A time of change, with leaves turning golden ....',
            image: '/gallery_autumn.jpg'
        },
        {
            id: 4,
            name: 'Spring',
            description: 'A season of renewal, where flowers bloom ....',
            image: '/gallery_spring.jpg'
        },
    ]

    return (
        <div className="Gallery_Data">
            <div className="gallery">
                {gallery_Data.map((gallery) => (
                    <div key={gallery.id} className="gallery_card">
                        <Image src={gallery.image} alt={gallery.name} width={500} height={290}></Image>
                        <h3>{gallery.name}</h3>
                        <p>{gallery.description}</p>
                        <button>read more</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
