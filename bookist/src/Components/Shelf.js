import React from 'react'

const Shelf = (props) => {

    const { shelf } = props

    


    
    return (
        <section>
            <div className='shelf'>
                <h2>your shelf</h2>
            </div>
            
            <ul className='shelf-list'>{shelf}</ul>

        </section>
        
        
    )
}
export default Shelf