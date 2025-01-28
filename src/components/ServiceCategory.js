import React from "react"

function ServiceCategory({ title, description, imageUrl }) {
  return (
    <div className="card h-100">
      <img
        src={imageUrl || "/placeholder.svg"}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary mt-auto">Schedule Repair</button>
      </div>
    </div>
  )
}

export default ServiceCategory

