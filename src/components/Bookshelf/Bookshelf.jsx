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
            {/* Form will go here */}
        </div>
        <div className="bookCardsDiv">Book cards will display here</div>
    </div>
  )
}

// export
export default Bookshelf