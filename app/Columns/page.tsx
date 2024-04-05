import Image from 'next/image';
import demo from '../images/demo.png';


export default function Page() {
    return (
        <div>
            {/* Adding based on column count */}
            <div className="columns-3">
                <Image src={demo} alt='' />
                <Image src={demo} alt='' />
                <Image src={demo} alt='' />
            </div>

            {/* Adding based on column width */}
            <div className="columns-3xs mt-3">
                <Image className="w-full aspect-video" src={demo} alt='' />
                <Image className="w-full aspect-square" src={demo} alt='' />
                <Image className="w-full aspect-video" src={demo} alt='' />
            </div>

            {/* Setting the column gap */}
            <div className="gap-8 columns-3">
                <Image className="w-full aspect-video" src={demo} alt='' />
                <Image className="w-full aspect-video" src={demo} alt='' />
                <Image className="w-full aspect-video" src={demo} alt='' />
            </div>

        </div>
    );
}
