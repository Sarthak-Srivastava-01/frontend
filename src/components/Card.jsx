import React from 'react'

const Card = () => {
  return (
    <div>
        <section className="py-16">
            <div className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <img src="https://img.freepik.com/premium-photo/colorful-abstract-painting-with-black-background_204916-535.jpg" alt="" />
                        <h4 className="text-xl font-semibold mb-2">Feature 1</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eveniet consequatur quae assumenda laborum, dignissimos aut nobis ea officiis corporis?</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg">
                        <img src="https://img.freepik.com/premium-photo/colorful-abstract-painting-with-black-background_204916-535.jpg" alt="" />
                        <h4 className="text-xl font-semibold mb-2">Feature 1</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eveniet consequatur quae assumenda laborum, dignissimos aut nobis ea officiis corporis?</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg">
                        <img src="https://img.freepik.com/premium-photo/colorful-abstract-painting-with-black-background_204916-535.jpg" alt="" />
                        <h4 className="text-xl font-semibold mb-2">Feature 1</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eveniet consequatur quae assumenda laborum, dignissimos aut nobis ea officiis corporis?</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Card