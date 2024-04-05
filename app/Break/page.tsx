
export default function Page() {
    return (
        <div className='min-h-screen'>
            {/* break-after-* */}
            <div className="columns-2">
                <p>Well, let me tell you something, ...</p>
                <p className="break-after-column">Sure, go ahead, laugh...</p>
                <p>Maybe we can live without...</p>
                <p>Look. If you think this is...</p>
            </div>

            {/* break-before-* */}
            <div className="columns-2 mt-5">
                <p>Well, let me tell you something, ...</p>
                <p className="break-before-column">Sure, go ahead, laugh...</p>
                <p>Maybe we can live without...</p>
                <p>Look. If you think this is...</p>
            </div>

            {/* break-inside-* */}
            <div className="columns-2 mt-5">
                <p>Well, let me tell you something, ...</p>
                <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
                <p>Maybe we can live without...</p>
                <p>Look. If you think this is...</p>
            </div>
        </div>
    );
}
