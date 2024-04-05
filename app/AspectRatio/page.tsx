
export default function page() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-between'>
            <div>
                {/* Utilities for controlling the aspect ratio of an element. */}
                {/* <iframe className="w-full aspect-auto" src="https://anycopy.io/"></iframe> */}
                <iframe className="w-full aspect-square" src="https://anycopy.io/"></iframe>
                <iframe className="w-full aspect-video" src="https://anycopy.io/"></iframe>
                <iframe className="w-full aspect-ratio: 16 / 9" src="https://anycopy.io/"></iframe>
                {/* Applying conditionally */}
                <iframe className="w-full aspect-video hover:aspect-square" src="https://anycopy.io/"></iframe>
                {/* Bearkpoints and media queries */}
                <iframe className="w-full aspect-video md: aspect-video sm:aspect-square" src="https://anycopy.io/"></iframe>
            </div>
        </div>
    );
}
