import Image from 'next/image';
import photo from '../images/photo.avif';

export default function Page() {
    return (
        <div className="min-h-screen flex justify-center">
            <div >
                {/* Use the object-cover utility to resize an element’s content to cover its container. */}
                <div className="bg-indigo-300">
                    <Image src={photo} alt='' className="object-cover aspect-square h-48 w-96" />
                </div>

                {/* Use the object-contain utility to resize an element's content to stay contained within its container. */}
                <div className="bg-purple-300 ...">
                    <Image src={photo} alt='' className="object-contain aspect-square h-48 w-96" />
                </div>

                {/* Use the object-scale-down utility to display an element’s content at its original size but scale it down to fit its container if necessary. */}
                <div className="bg-cyan-300">
                    <Image src={photo} alt='' className="object-scale-down aspect-square h-48 w-96" />
                </div>

                {/* Use the object-none utility to display an element’s content at its original size ignoring the container size. */}
                <div className="bg-yellow-300">
                    <Image src={photo} alt='' className="object-none aspect-square h-48 w-96" />
                </div>
            </div>

            {/* <div className="container isolate w-200 h-200">
                <Image src={photo} alt='' className="object-none object-left-top bg-yellow-300 w-24 h-24" />
                <Image src={photo} alt='' className="object-none object-top bg-yellow-300 w-24 h-24" />
                <Image src={photo} alt='' className="object-none object-right-top bg-yellow-300 w-24 h-24" />

                <Image src={photo} alt='' className="object-none object-left bg-yellow-300 w-24 h-24" />
                <Image src={photo} alt='' className="object-none object-center bg-yellow-300 w-24 h-24" />
                <Image src={photo} alt='' className="object-none object-right bg-yellow-300 w-24 h-24" />

                <Image src={photo} alt='' className="object-none object-left-bottom bg-yellow-300 w-24 h-24" />
                <Image src={photo} alt='' className="object-none object-bottom bg-yellow-300 w-24 h-24" />
                <Image src={photo} alt='' className="object-none object-right-bottom bg-yellow-300 w-24 h-24" />
            </div> */}
        </div>
    );
}
