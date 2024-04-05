export default function Page() {
    return (
        <div className="w-full min-h-screen">
            <div className="container">
                container
            </div>
            {/* To center a container, use the mx-auto utility: */}
            <div className="container mx-auto">
                container mx-auto
            </div>
            {/* To add horizontal padding, use the px-* utilities:  */}
            <div className="container px-4">
                content px-4
            </div>
            {/* Full-width fluid until the `md` breakpoint, then lock to container */}
            <div className="container md:container md:mx-auto">
                container md:container md:mx-auto
            </div>
        </div>
    );
}
