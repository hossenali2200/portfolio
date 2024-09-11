import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
 


const TestimonialData = [
    {
        id:1,
        name:"Bogura Service",
        technologies: ["React.js", "Next.js", "mongoDB"],
        img:"https://plus.unsplash.com/premium_photo-1663013550257-706caefd470a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D",
        link:"https://66cd7baa310e999f1ebb99a3--extraordinary-cuchufli-cd8cb1.netlify.app/",
        
    },
    {
        id:2,
        name:"Food Mama",
        technologies: ["Node Js", "Next.js", "mongoDB"],
        img:"https://images.unsplash.com/photo-1695654398407-0c309e1f5827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww",
        link:"https://66d47dd882b0db0f6daca388--vermillion-kringle-d0b5df.netlify.app/",
         
    },
    {
        id:3,
        name:"Bogura Mart",
        technologies: [ "React.js", "Next.js", "mongoDB"],
        img:"https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
        link:"https://66cd7a5b0a0f559e00e2f4a2--shiny-salmiakki-5f03b3.netlify.app/",
        
    },
    {
        id:4,
        name:"Coffe Cafe",
        technologies: [ "React.js", "Next.js", "mongoDB"],
        img:"https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D",
        link:"https://65bdbb28d164b6422abeb3a9--spiffy-crostata-9daaf4.netlify.app/",
        
    },
    {
        id:5,
        name:"Animated Portfolio",
        technologies: ["F motion", "Next.js", "mongoDB"],
        img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvfGVufDB8fDB8fHww",
        link:"https://65c787975289ee74a4113606--gleeful-druid-a7d9c3.netlify.app/",
        
    },
    {
        id:6,
        name:"Disney Clone",
        technologies: [ "React.js", "Next.js", "mongoDB"],
        img:"https://images.unsplash.com/photo-1549109776-5a25ed5cce47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzbmV5JTIwd29ybGR8ZW58MHx8MHx8fDA%3D",
        link:"https://659fec7940efa212f8f19da0--profound-narwhal-18c6fa.netlify.app/",
         
    },
    {
        id:7,
        name:"Nike Clone",
        technologies: [  "Node js", "Next.js", "mongoDB"],
        img:"https://images.unsplash.com/photo-1521093470119-a3acdc43374a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D",
        link:"https://65980e527241e30ea66270d5--quiet-centaur-3a8a4a.netlify.app/",
    
    },
]

 
const RecentWork = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToShow: 4,
        slideToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
             
          }
            },
            {
                breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
            },
            {
                breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
            },
        ]
    }
  return (
    <div id='projects' className='py-14 mb-10 '>
        <div className="container  ">
            {/*header section */}
            <div className='text-center mb-10'>
                <motion.h1
                 whileInView={{ opacity: 1, y: 0}}
                 initial={{opacity: 0, y: -100}}
                 transition={{duration: 1.5}}
                data-aos="fade-up" className='text-4xl font-bold font-cursive text-slate-200'>My Recent Work</motion.h1>
            </div>
            {/*Testimonial cards section */}
            <div data-aos="zoom-in">
                <Slider {...settings} >
                    {
                        TestimonialData.map((data, index) => {
                            return( 
                            <div className='my-6' key={data.id}>
                                <div className='flex flex-col items-center gap-2 w-[400px] h-[450px] lg:h-[450px] shadow-lg py-4   mx-4 rounded-xl bg-stone-100 text-white relative'>
                                     {/*image section */}
                                    <div className='mb-2 '>
                                        <img src={data.img} alt="" className='object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded w-60 h-60'/>
                                    </div>
                                     {/*content section */}
                                     <div className=' flex flex-col items-center gap-2 '>
                                        <div>
                                            <h2 className='bg-slate-200 text-purple-600 font-bold text-xl px-6 py-2 rounded-xl'>{data.name}</h2>

                                        </div>
                                        <a className='bg-slate-200 text-black px-6 py-2 rounded-xl hover:bg-purple-700 hover:text-slate-100' href={data.link} target='_blank'>Live Link</a>

                                        <div className='grid grid-cols-3 gap-2'>
                                        {data.technologies.map((tech, index) => (
                                            <span
                                            key={index}
                                            className="mr-2 rounded bg-white px-3 py-1 text-sm font-medium text-purple-900 hover:bg-purple-500 hover:text-black"
                                            >
                                            {tech}
                                            </span>
                                        ))}
                                        </div>
                                    
                                     </div>
                                     
                                </div>
                            </div>)
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default RecentWork