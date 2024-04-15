import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"


const RightSideNav = () => {
    return (
        <div>
            <div className="p-2">
                <p className="text-lg font-bold">Login With</p>
                <button className="btn btn-outline w-full mt-4">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full mt-2">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="mt-8">
                <p className="text-lg font-bold">Find Us On</p>
                <a href="" className="flex gap-2 items-center p-3 border rounded-t-lg text-lg mt-4">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a href="" className="flex gap-2 items-center p-3 border-x text-lg">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href="" className="flex gap-2 items-center p-3 border rounded-b-lg text-lg">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className="mt-8 bg-gray-50">
                <p className="text-xl font-bold p-3">Q-Zone</p>
                <img className="mt-1" src={qZone1} alt="" />
                <img className="mt-3" src={qZone2} alt="" />
                <img className="mt-3" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;