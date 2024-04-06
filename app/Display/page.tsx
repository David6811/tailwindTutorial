export default function Page() {
    return (
        <div className="container min-h-screen  flex justify-center">
            <div className="w-64">
                When controlling the flow of text, using the CSS property
                <span className="inline font-bold">display: inline</span>
                 will cause the text inside the element to wrap normally.

                While using the property <span className="inline-block font-bold">display: inline-block</span>
                 will wrap the element to prevent the text inside from extending beyond its parent.

                Lastly, using the property <span className="block font-bold">display: block</span>
                 will put the element on its own line and fill its parent.
            </div>

            
        </div>
    );
}
