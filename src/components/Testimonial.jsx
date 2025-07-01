import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
const Testimonial = () => {
    const testimonials = [
        { 
        name: "Emma Rodriguez", 
        location: "Barcelona, Spain", 
        image: assets.testimonial_image_1,
        testimonial: "I've rented cars from various companies, but CarRental stands out for its exceptional service and quality. The car was in pristine condition, and the booking process was seamless. Highly recommend!" 
        },
        { 
        name: "Maoa Haard", 
        location: "Texas, USA", 
        image: assets.testimonial_image_2,
        testimonial: "CarRental made my trip unforgettable. The car was luxurious and comfortable, perfect for exploring the scenic routes. The customer support was also top-notch, answering all my queries promptly."
        },
        {
        name: "Sakshi Sharma", 
        location: "Jarkandh, India", 
        image: assets.testimonial_image_1,
        testimonial: "I had an amazing experience with CarRental. The car was exactly as described, and the rental process was hassle-free. The team was very professional and accommodating. I will definitely use their services again for my future trips."
       }

        
    ];
    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <Title title="What Our Coustomers Say" subTitle="Discover why discerning travelers choose StayVenture for their luxury accomadations around the world."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial,index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img
                                key={index} src={assets.star_icon} alt='star-icon'/>
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial