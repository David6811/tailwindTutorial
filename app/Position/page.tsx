import Image from 'next/image';
import photo from '../images/photo.avif';

export default function Page() {
    return (
        <div className="min-h-screen flex justify-center">

            {/* Statically positioning elements */}
            {/* <div className="static">
                <p>Static parent</p>
                <div className="absolute bottom-0 left-0">
                    <p>Absolute child</p>
                </div>
            </div> */}

            {/* Relatively positioning elements */}
            {/* <div className="relative">
                <p>Relative parent</p>
                <div className="absolute bottom-0 left-0">
                    <p>Absolute child</p>
                </div>
            </div> */}

            {/* Absolutely positioning elements */}
            <div className="static"> 
                {/* Static parent */}
                <div className="static"><p>Static child</p></div>
                <div className="inline-block"><p>Static sibling</p></div>

                {/* Static parent */}
                <div className="absolute"><p>Absolute child</p></div>
                <div className="inline-block"><p>Static sibling</p></div>
            </div>

        </div>
    );
}
