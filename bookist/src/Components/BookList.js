import React from 'react'

const BookList = (props) => {
    
    const { books, addToShelf } = props



    return (


        <div className='books'>
            <div className="booklist">
                {/* <h2>list</h2> */}
            </div>

            <div className="book-container">

                <div className="book">
                    <img onClick={addToShelf(books[0].title)} className='image' src={books[0].img} alt='The Pragmatic Programmer' />
                    <p>{books[0].title}</p>
                    <p>{books[0].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[1].title)} className='image' src={books[1].img} alt='HTML and CSS: Design and Build Websites'/>
                    <p>{books[1].title}</p>
                    <p>{books[1].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[2].title)} className='image' src={books[2].img} alt='Coding All-in-one For Dummies'/>
                    <p>{books[2].title}</p>
                    <p>{books[2].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[3].title)} className='image' src={books[3].img} alt='Learning React'/>
                    <p>{books[3].title}</p>
                    <p>{books[3].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[4].title)} className='image' src={books[4].img} alt='Learning Web Design'/>
                    <p>{books[4].title}</p>
                    <p>{books[4].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[5].title)} className='image' src={books[5].img} alt='another book'/>
                    <p>{books[5].title}</p>
                    <p>{books[5].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[6].title)} className='image' src={books[6].img} alt='another book'/>
                    <p>{books[6].title}</p>
                    <p>{books[6].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[7].title)} className='image' src={books[7].img} alt='another book'/>
                    <p>{books[7].title}</p>
                    <p>{books[7].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[8].title)} className='image' src={books[8].img} alt='another book'/>
                    <p>{books[8].title}</p>
                    <p>{books[8].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[9].title)} className='image' src={books[9].img} alt='another book'/>
                    <p>{books[9].title}</p>
                    <p>{books[9].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[10].title)} className='image' src={books[10].img} alt='another book'/>
                    <p>{books[10].title}</p>
                    <p>{books[10].author}</p>
                </div>
                <div className="book">
                    <img onClick={addToShelf(books[11].title)} className='image' src={books[11].img} alt='another book'/>
                    <p>{books[11].title}</p>
                    <p>{books[11].author}</p>
                </div>


            </div>
        </div>
        
        
    )
}
export default BookList