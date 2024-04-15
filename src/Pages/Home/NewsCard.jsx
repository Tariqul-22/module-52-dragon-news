import PropTypes from 'prop-types';
import { BsShare } from "react-icons/bs";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsCard = ({ newsCard }) => {
    const {title, image_url, details, rating, total_view, author, _id } = newsCard
    return (
        <div className='mb-8 border border-[#E7E7E7] rounded-md'>
            <div className='p-4 bg-gray-100 flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='w-10 h-10'>
                        <img className='w-full rounded-full' src={author?.img} alt="" />
                    </div>
                    <div className='ml-3'>
                        <h4 className='font-semibold'>{author?.name}</h4>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div className='text-xl space-x-3'>
                    <button><FaRegBookmark /></button>
                    <button><BsShare /></button>
                </div>
            </div>
            <div className='p-4'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <div className='my-4'>
                    <img src={image_url} alt="" />
                </div>

                {
                    details.length > 180
                        ? <p>{details.slice(0, 180)} <br /><Link 
                         to={`news/${_id}`}
                        className='text-amber-500 font-semibold'>Read More...</Link></p>
                        : <p>{details}</p>
                }


                <div className='flex items-center justify-between mt-6 border-t'>
                    <div className='flex gap-2 items-center mt-4'>
                        <FaStar className='text-amber-500'></FaStar>
                        <FaStar className='text-amber-500'></FaStar>
                        <FaStar className='text-amber-500'></FaStar>
                        <FaStar className='text-amber-500'></FaStar>
                        <FaStar className='text-amber-500'></FaStar>
                        <p className=''>{rating?.number}</p>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        <FaEye className='text-lg'></FaEye>
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    newsCard: PropTypes.object,
}
export default NewsCard;