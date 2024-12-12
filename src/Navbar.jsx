import React, { useContext } from 'react'
import './navbar.css'
import PixabayContext from './context/PixabayContext'

const navbar = () => {

    const { fetchImageDataByCat, fetchImageDataByLoc, setQueryData } = useContext(PixabayContext);

    return (
        <>
            <div className="up">
                <div className='nav' style={{ border: '0.1px solid cyan', padding: '10px', borderRadius: '10px' }}>
                    <p style={{ fontSize: '15px' }}>Category:</p>
                    <button type="button" onClick={() => fetchImageDataByCat("nature")} className="btn btn-outline-primary">Nature</button>
                    <button type="button" onClick={() => fetchImageDataByCat("science")} className="btn btn-outline-secondary">Science</button>
                    <button type="button" onClick={() => fetchImageDataByCat("computer")} className="btn btn-outline-success">Computer</button>
                    <button type="button" onClick={() => fetchImageDataByCat("sports")} className="btn btn-outline-danger">Sports</button>
                    <button type="button" onClick={() => fetchImageDataByCat("buildings")} className="btn btn-outline-warning">Buildings</button>
                    <button type="button" onClick={() => fetchImageDataByCat("animals")} className="btn btn-outline-info">Animals</button>
                    <button type="button" onClick={() => fetchImageDataByCat("transportation")} className="btn btn-outline-light">Transportation</button>
                    <button type="button" onClick={() => fetchImageDataByCat("travel")} className="btn btn-outline-danger">Travel</button>
                </div>
                <div className='nav' style={{ border: '0.1px solid cyan', padding: '10px', borderRadius: '10px' }}>
                    <p style={{ fontSize: '15px' }}>Location:</p>
                    <button type="button" onClick={() => fetchImageDataByLoc("india")} className="btn btn-outline-primary">India</button>
                    <button type="button" onClick={() => fetchImageDataByLoc("america")} className="btn btn-outline-secondary">America</button>
                    <button type="button" onClick={() => fetchImageDataByLoc("canadian")} className="btn btn-outline-success">Canadian</button>
                    <button type="button" onClick={() => fetchImageDataByLoc("las+vegas")} className="btn btn-outline-danger">Las Vegas</button>
                    <button type="button" onClick={() => fetchImageDataByLoc("dubai")} className="btn btn-outline-warning">Dubai</button>
                    <button type="button" onClick={() => fetchImageDataByLoc("russia")} className="btn btn-outline-info">Russia</button>
                    <button type="button" onClick={() => fetchImageDataByLoc("transilvania")} className="btn btn-outline-light">Transilvania</button>
                    <button type="button" onClick={() => fetchImageDataByLoc("china")} className="btn btn-outline-danger">China</button>
                </div>
            </div>
            <div className="container" style={{width:'800px'}}>
                <input type="text" placeholder="Search" onChange={(e) => setQueryData(e.target.value)} className='form-control bg-dark text-light'/>
            </div>
        </>
    )
}

export default navbar
