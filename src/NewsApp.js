import React, { useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';






function NewsApp() {
    const [news, setNews] = useState([])
    // const [pagination,setPagination] = useState({start:0,end:4})
    const getnews = () => {
        // console.log('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7be89bf099a7469d946290f8beba9091')

    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7be89bf099a7469d946290f8beba9091')
            .then(function (response) {
                // console.log(response);
                setNews(response.data.articles)
            })
            .catch(function (error) {
                console.log(error);
            })
    

    }
    getnews()
    return (
        <>
            {/* <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        
                    </div>
                </div>
            </div>  */}
             

            <div className="container">
                <div className="row">
                <h1 className="text-center">The News App</h1>
                {/* <Button className='btn btn-primary' onClick={getnews}>Fetch news</Button> */}
                
                        {
                            news.map((value) => {
                                return (
                                    <div className="col-md-4 my-5 ">
                                    <Card key={value.id}>
                                        <Card.Img variant="top" src={value.urlToImage
                                        } />
                                        <Card.Body>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Text>
                                                {value.description}
                                            </Card.Text>
                                            <Button className='btn btn-primary' href={value.url} target="_blank">Read More</Button>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                )
                            })}

                   
                </div>
            </div>


        </>
    )
}

export default NewsApp
