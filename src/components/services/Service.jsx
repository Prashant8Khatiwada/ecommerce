import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./service.css"
function Service() {
  return (
    <section>
    <div className="container service_container">
      <div className="grid grid-three-column">
        <div className="services services-1">
          <div>
            <TbTruckDelivery className="icon" />
            <h3>Super Fast And Free Delivery</h3>
          </div>
        </div>

        <div className="services services-2">
          <div className="services-column-2">
            <MdSecurity className="icon" />
            <h3>Non-Contact Shipping</h3>
          </div>
          <div className="services-column-2">
            <GiReceiveMoney className="icon" />
            <h3>Money Back Guaranteed</h3>
          </div>
        </div>

        <div className="services services-3">
          <div>
            <RiSecurePaymentLine className="icon" />
            <h3>Super Fast And Free Delivery</h3>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Service;
