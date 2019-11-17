import React from 'react';
import { Flags } from './Flags';
import { Listings } from './Listings';
import { Medicines } from './medicines';

export const Content = ({ search }) => {
  return (
    <div className="container-fluid content-div mt-5">
      <nav>
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            At Glance
          </a>
          <a
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Listings
          </a>
          <a
            className="nav-item nav-link"
            id="nav-medicine-tab"
            data-toggle="tab"
            href="#nav-medicine"
            role="tab"
            aria-controls="nav-medicine"
            aria-selected="false"
          >
            MPNS
          </a>
        </div>
      </nav>
      <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <Flags />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <Listings search={search} />
        </div>
        <div
          className="tab-pane fade"
          id="nav-medicine"
          role="tabpanel"
          aria-labelledby="nav-medicine-tab"
        >
          <Medicines/>
        </div>
      </div>
    </div>
  );
};
