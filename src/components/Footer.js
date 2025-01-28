import React from "react"

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p className="small">
              QuickFix Appliance Repair is your trusted partner for all home appliance repairs. With years of
              experience, we provide fast, reliable, and affordable repair services.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Our Services</h5>
            <ul className="list-unstyled small">
              <li>AC Repair and Maintenance</li>
              <li>Refrigerator Repair</li>
              <li>Washing Machine Repair</li>
              <li>Other Home Appliance Repairs</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address className="small">
              841226 Mohiuddinpur
              <br />
              Siwan Bihar
              <br />
              Phone: 1234567890
              <br />
              Email: amrubabu@gmail.com
            </address>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} QuickFix Appliance Repair. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

