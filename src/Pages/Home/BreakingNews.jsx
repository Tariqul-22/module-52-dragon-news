import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="p-3 bg-gray-100 flex">
            <div className="btn btn-secondary bg-red-700 text-xl rounded-none">Updates</div>
            <Marquee pauseOnHover={true} speed={100} className="space-x-5">
                <Link to="/" className="mr-8">I can be a React component, multiple React components...</Link>
                <Link to="/" className="mr-8">The US government is using economic tools.</Link>
                <Link to="/" className="mr-8">The European Commissions new recommendations on Post-Quantum.</Link>
                <Link to="/" className="mr-8">The New York State Bar Associations Task Force on Artificial Intelligence.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;