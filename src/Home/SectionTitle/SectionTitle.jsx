

const SectionTitle = ({ title, text }) => {
    return (
        <div className="mx-auto max-w-[1170px] rounded-xl  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-[100px]">
            <header className="text-center space-y-8">
                {/* <h2 className="text-xl lg:text-5xl font-EBGaramond font-bold text-gray-900 sm:text-3xl">{title}</h2> */}
                <span className="flex items-center ">
                    <span className="h-px flex-1 bg-black"></span>
                    <span className="shrink-0 px-6  text-4xl lg:text-5xl font-EBGaramond font-bold sm:text-3xl">{title}</span>
                    <span className="h-px flex-1 bg-black"></span>
                </span>
                <p className="mx-auto mt-4 max-w-1/4 ">
                    {text}
                </p>
            </header>
        </div>
    );
};

export default SectionTitle;