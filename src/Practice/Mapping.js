import React from 'react'

const Mapping = () => {
    const practice = [
        {
            id: 1, 
            name: 'Gautam',
            age: 3,
            address: 'Delhi'
          },
          {
            id: 2, 
            name: 'John',
            age: 25,
            address: 'London'
          }
    ]
  return (
    <div>
      {
        practice.map(practice => (
          <div key={practice.id}>
            <h2>{practice.name}</h2>
            <p>{practice.age}</p>
            <p>{practice.address}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Mapping
