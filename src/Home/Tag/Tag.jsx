import { Link } from "react-router-dom";


const Tag = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-white mb-2">
                <p className="text-center text-sm font-medium">
                    Want to win prize money?
                    <Link to='/AllContest' className="inline-block underline ml-1"> Check out our new contest</Link>
                </p>
            </div>
        </div>
    );
};

export default Tag;