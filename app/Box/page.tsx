
export default function Page() {
    return (
        <div className='min-h-screen'>
            <div className="container mx-auto flex justify-center">
                <div>
                    <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
                        Hello<br />
                        World
                    </span>
                </div>
            </div>

            <div className="container mx-auto flex justify-center mt-5">
                <div>
                    <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
                        Hello<br />
                        World
                    </span>
                </div>
            </div>

            <div className="container mx-auto flex justify-center mt-5">
                <div className="box-border h-32 w-32 p-4 border-8 border-red-500 bg-blue-100">
                </div>
            </div>

            <div className="container mx-auto flex justify-center mt-5">
                <div className="box-content h-32 w-32 p-4 border-8 border-red-500 bg-blue-100">
                </div>
            </div>

        </div>
    );
}
