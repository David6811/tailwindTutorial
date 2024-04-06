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


                <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-5">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                    <span>06</span>
                    <span>07</span>
                    <span>08</span>
                    <span>09</span>
                </div>

                <span className="inline-grid grid-cols-3 gap-4">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                    <span>06</span>
                </span>

                <span className="inline-grid grid-cols-3 gap-4">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                    <span>06</span>
                </span>

                {/* contents */}
                <div className="flex text-white mt-5">
                    <div className="flex-1 mr-3 bg-blue-100 h-10 flex justify-center items-center">01</div>
                    <div className="contents">
                        <div className="flex-1 mr-3 bg-blue-100 h-10 flex justify-center items-center">02</div>
                        <div className="flex-1 mr-3 bg-blue-100 h-10 flex justify-center items-center">03</div>
                    </div>
                    <div className="flex-1 mr-3 bg-blue-100 h-10 flex justify-center items-center">04</div>
                </div>

                {/* table */}
                <div className="table w-full mt-5">
                    <div className="table-header-group ...">
                        <div className="table-row font-bold">
                            <div className="table-cell text-left ">Song</div>
                            <div className="table-cell text-left ...">Artist</div>
                            <div className="table-cell text-left ...">Year</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        <div className="table-row">
                            <div className="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                            <div className="table-cell ...">Malcolm Lockyer</div>
                            <div className="table-cell ...">1961</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell ...">Witchy Woman</div>
                            <div className="table-cell ...">The Eagles</div>
                            <div className="table-cell ...">1972</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
