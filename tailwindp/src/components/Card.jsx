import React from 'react'

function Card(props) {
    return (
        <>
            <div className="card card-side bg-gray-200 border-4  border-slate-400 shadow-xl pl-10 rounded-none w-[25vw]  max-sm:w-screen">
                <figure className=''>
                    <img
                        src={props.img}
                        alt="Movie"
                        className='h-[20vh] w-20 ' />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.text1}</p>
                    {props.bold? <p className='font-bold'>{props.text2}</p> : <p>{props.text2}</p>} 
                    <p>{props.text3}</p>
                    <p>{props.text4}</p>
                    {props.text5? <p>{props.text5}</p>:''}  
                </div>
            </div>
        </>
    )
}

export default Card