import Image from 'next/image';
import ratio from '../images/demo.png';

export default function Page() {
    return (
        <div className="min-h-screen flex justify-center">
            <div >

                {/* inline inline-block block */}
                <div className="w-64">
                    When controlling the flow of text, using the CSS property
                    <span className="inline font-bold">display: inline</span>
                    will cause the text inside the element to wrap normally.

                    While using the property <span className="inline-block font-bold">display: inline-block</span>
                    will wrap the element to prevent the text inside from extending beyond its parent.

                    Lastly, using the property <span className="block font-bold">display: block</span>
                    will put the element on its own line and fill its parent.
                </div>

                {/* flow-root */}
                <div>
                    <div className="p-4">
                        <div className="flow-root">
                            <div className="my-4">Well, let me tell you something, ...</div>
                        </div>
                        <div className="flow-root">
                            <div className="my-4">Sure, go ahead, laugh if you want...</div>
                        </div>
                    </div>
                </div>

                {/* flex */}
                <div className="flex items-center">
                    <Image src={ratio} alt='' className="aspect-square w-10 h-10" />
                    <div className='ml-5'>
                        <strong className='block'>Andrew Alfred</strong>
                        <span className='block'>Technical advisor</span>
                    </div>
                </div>

                {/* inline-flex */}
                <p>
                    Today I spent most of the day researching ways to keeps telling me
                    <span className="inline-flex items-baseline">
                        <Image src={ratio} alt='' className="aspect-square w-10 h-10" />
                        <span>Kramer</span>
                    </span>
                    there is no way to make it work, that ...
                </p>

            </div>
        </div>
    );
}
