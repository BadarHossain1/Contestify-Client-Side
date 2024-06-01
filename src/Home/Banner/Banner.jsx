

const Banner = () => {
    return (
        <div className="max-w-[1170px] mx-auto rounded-xl h-[400px]">
            <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/Y8s7twk/hackathon.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content rounded-xl">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;