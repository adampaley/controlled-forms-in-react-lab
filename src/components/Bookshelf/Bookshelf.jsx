// imports
import { useState } from 'react'

// component 
const Bookshelf = (props) => {
  // state variables
  const [books, setBooks] = useState([])
  const [newBooks, setNewBooks] = useState(
    {
        title: '',
        author: '',
    }
  )
  
  // handler functions
  const handleInputChange = (e) => {
    setNewBooks({...newBooks, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooks([...books, newBooks])
    setNewBooks(
        {
            title: '',
            author: '',
        }
    )

  }

  return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form>
                <label htmlFor="title">Book Title: </label>
                <input 
                  type="text"
                  id="title"
                  name="title"
                  value={newBooks.title}
                  onChange={handleInputChange}
                />
                <label htmlFor="author">Author: </label>
                <input 
                  type="text"
                  id="author"
                  name="author"
                  value={newBooks.author}
                  onChange={handleInputChange} 
                />
                <button type="submit" onClick={handleSubmit}>Add to your Library</button>
            </form>
        </div>
        <div className="bookCardsDiv">Book cards will display here</div>
            {books.map((book, ind) =>
              <div className='bookCard'> 
                <h4 key={ind}>"{book.title}" by {book.author} </h4>
              </div>
            )}
    </div>
  )
}

// export
export default Bookshelf