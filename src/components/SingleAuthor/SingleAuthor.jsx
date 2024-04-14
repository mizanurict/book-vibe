import PropTypes from 'prop-types';
const SingleAuthor = ({ book }) => {
    const {bookName, author } = book;
    return (
        <div>
            <div className="bg-slate-200 rounded-xl shadow-md p-4 text-start">
                <h1 className='text-xl font-semibold'>Author: <span className="font-semibold text-orange-400">{ author}</span> </h1>
                <p>Book: <span className="font-semibold text-orange-400">{ bookName}</span></p>
            </div>
        </div>
    );
};
SingleAuthor.propTypes = {
    book:PropTypes.object.isRequired
}
export default SingleAuthor;