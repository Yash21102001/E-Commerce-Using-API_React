import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

function Review(props) {

  let [Star, setStar] = useState([1, 2, 3, 4, 5])
  let [activStar, setActivStar] = useState(-1)
  let [review, setReview] = useState({})
  let [allReview, setAllReview] = useState([])

  useEffect(() => {
    getReview()
  }, [setAllReview])

  let getReview = async () => {
    let productReview = await fetch("http://localhost:3000/reviews/?productId=" + props.productId)
    let data = await productReview.json();
    console.log(data);
    setAllReview(data);

  }

  let getInpute = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setReview({ ...review, [name]: value })
  }

  let handleDeleteReview = async (id) => {
    await fetch("http://localhost:3000/reviews/" + id, {
      method: "delete"
    })
    getReview()
  }

  let addReview = async (e) => {
    e.preventDefault();
    let obj = { ...review, ["star"]: activStar, productId: props.productId }
    console.log("Review Submitted: ", obj);
    console.log(props.productId);

    let addrev = await fetch("http://localhost:3000/reviews", {
      method: "post",
      body: JSON.stringify(obj),
    })
    setReview({});
    setActivStar(-1);
    getReview()
  }

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f7ff', minHeight: '100vh' }}>
      <Card style={{
        maxWidth: '600px', margin: '0 auto', border: 'none',
        borderRadius: '12px', boxShadow: '0 4px 15px rgba(108, 92, 231, 0.1)'
      }}>
        <Card.Body>
          <form method="post" onSubmit={addReview}>
            <h2>Reviews</h2>

            {[...Array(5)].map((v, i) => (
              <FaStar
                key={i}
                onMouseOver={() => setActivStar(i + 1)}
                style={{
                  color: activStar > i ? "yellow" : "gray",
                  cursor: "pointer"
                }}
              />
            ))}
            <Button type="button" onClick={() => setActivStar(-1)} style={{ marginLeft: '10px' }}>⨂</Button>

            <br />
            <textarea
              name="description"
              onChange={getInpute}
              value={review.description || ""}
              placeholder="Write your review..."
              style={{ width: "100%", marginTop: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <br />
            <Button type="submit" style={{ marginTop: "1rem" }}>Add Review</Button>

          </form>
        </Card.Body>
      </Card>
      {allReview && allReview.map((v, i) => {
        return (
          <div >
            {v.star > 0 && [...Array(v.star)].map((v) => (
              <FaStar style={{
                color: "yellow"
              }} />
            ))}
            <textarea
              name="description"
              onChange={getInpute}
              value={v.description}
              placeholder="Write your review..."
              style={{ width: "100%", marginTop: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <Button type="submit" onClick={(e)=>handleDeleteReview(v.id)} style={{ marginTop: "1rem" }}>Delete Review</Button>
          </div>
        );
      })}


    </div>
  )
}

export default Review
