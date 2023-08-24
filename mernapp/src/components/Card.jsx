import React from 'react'

const Card = () => {
  return (
    <div>
        <div>
          <div className="card m-3 " style={{ "width": "20rem", "maxHeight": "600px" }}>
            <img src="https://source.unsplash.com/random/300×300/?mango,juice" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example</p>
              <div className='container w-100'>
                <select className='m-2 h-100 w-50 bg-success'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}> {i + 1}</option>)
                  })}
                </select>

                <select className='m-2 h-100 w-50 bg-success'>
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>

                <div className='d-inline h-100 fs-5'> Full Price</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card