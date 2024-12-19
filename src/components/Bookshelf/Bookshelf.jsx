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