import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="flex flex-col items-center space-y-4 my-8">
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;