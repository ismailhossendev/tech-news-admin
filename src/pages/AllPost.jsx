import React, { useEffect, useState } from 'react';
import {FaBan,FaEye} from 'react-icons/fa'
import {TiEdit} from 'react-icons/ti'
import { Link } from 'react-router-dom';
const AllPost = () => {
    const [newses,setNewses] = useState([])
    const [refresh,setRefresh] = useState(true)
    const [count,setCount] = useState(0);
    const [size,setSize] = useState(10);
    const [page,setPage] = useState(0);

    const pages = Math.ceil(count / size)

    useEffect(()=>{
        fetch(`http://localhost:5000/news?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data =>{
            setNewses(data.news)
            setCount(data.count)
        })
    },[refresh,page,size])

    return (
        <div className="overflow-x-auto w-full">
            <div className="">
                {
                    [...Array(pages).keys()].map(num => {
                    return <button className={`btn btn-square border-white ${num === page && "btn-primary"}`}onClick={()=> setPage(num)} value={num} key={num}>{num +1}</button>
                    })
                }
                {/* <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn">4</button> */}
            </div>
            <div className=" flex justify-between px-1 items-center">
                <h1 className="text-2xl font-semibold font-serif">Your All Post :{count}</h1>
                <Link to='/post/create' className='text-lg flex btn btn-primary my-2'><TiEdit className='text-3xl mb-1'/>Create Post</Link>
            </div>
            <table className="table w-full ">
                <thead>
                    <tr>
                        <th>
                            <select onChange={e => setSize(e.target.value)} className='btn btn-sm'>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>VIew</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newses.map(news =>{ 
                            const {title,author,summary,published_date,rank,media,_id} = news;
                            const handleDelete = ()=>{
                                fetch(`http://localhost:5000/news?id=${_id}`,{
                                    method:'DELETE'
                                })
                                .then(res =>{
                                    setRefresh(!refresh)
                                    alert(res.message)
                                })
                            }
                            return(
                                <tr key={news._id}>
                                    <th>
                                        <button onClick={handleDelete} className='btn btn-info text-xl'><FaBan/></button>
                                    </th>
                                    <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={media} alt="" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{title?.length > 20 ? title.slice(0,30) : title}</div>
                                        <div className="text-sm opacity-50">{author}</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    {summary.slice(0,60)+"..."}
                                    <br/>
                                    <span className="badge badge-ghost badge-sm">{published_date}</span>
                                    </td>
                                    <td><FaEye className='inline mb-1' />{rank}</td>
                                    <th>
                                    <Link to={`/post/edit/${_id}`} className="btn btn-secondary btn-xs">edit</Link>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>VIew</th>
                        <th></th>
                    </tr>
                </tfoot>
                
            </table>
            </div>
    );
};

export default AllPost;