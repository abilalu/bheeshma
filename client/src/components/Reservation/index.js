import React from "react";

function Reservation() {

  return (
    <div className="reservation">
      <div className="text-block">
        <h2>Make a reservation</h2>
        <p>
          Here's how it works
        </p>
      </div>
      <div className="flex-row container">

        <div className="reservation-block">
          <p className="reservation-step">1</p>
          <div>
            <h6>
              Browse through our shop and add your selections to your cart!
            </h6>
            <p>
              We carry most major brands and supportive equipment, so whatever it is you’re looking for, we probably have it!
            </p>
          </div>
        </div>
       
        <div className="reservation-block">
          <p className="reservation-step">2</p>
          <div>
            <h6>
              Check the availability of your selections            
            </h6>
            <p>
            If the product you want isn’t in stock or available when you need it, add your name to the item’s waiting list, and we’ll let you know when it’s back!
            </p>
          </div>
        </div>

        <div className="reservation-block">
          <p className="reservation-step">3</p>
          <div>
            <h6>
              Read, fill out, and sign our rental agreement forms
            </h6>
            <p>
              Yeah, yeah, we know, reading Legalese can be a total downer. But once you’ve filled it in and promised us your firstborn* if you renege on any of the stipulations, you’re home free!
            </p>
            <p className="footnote">
              *No actual babies are harmed
            </p>
          </div>
        </div>

        <div className="reservation-block">
          <p className="reservation-step">4</p>
          <div>
            <h6>
              Submit your reservation request and payment information
            </h6>
            <p>
              You won’t be charged until we’ve confirmed the availability of the equipment you’ve requested. Watch out for an email from us!
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Reservation;
