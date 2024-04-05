import Image from 'next/image';
import ratio from '../images/demo.png';

export default function page() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-between'>
            <div>
                {/* Utilities for controlling the aspect ratio of an element. */}
                {/* <iframe className="w-full aspect-auto" src="https://anycopy.io/"></iframe> */}
                <Image src={ratio} alt='' className="aspect-square w-1/4"/>

                <Image src={ratio} alt='' className="aspect-video  w-1/4 mt-3 "/>

                <Image src={ratio} alt='' className="w-full aspect-ratio: 16 / 9  w-1/4 mt-3"/>

                {/* Applying conditionally */}
                <Image src={ratio} alt='' className="aspect-video hover:aspect-square w-1/4 mt-3"/>

                {/* Bearkpoints and media queries */}
                <Image src={ratio} alt='' className="aspect-video md: aspect-video sm:aspect-square w-1/4 mt-3"/>
            </div>
        </div>
    );
}