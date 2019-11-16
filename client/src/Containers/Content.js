import React from "react"
import {Flags} from './Flags';
import { Listings } from "./Listings"

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
            Listings
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
            At Glance
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
          <Listings search={search} />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
        <Flags/>
        </div>
      </div>
    </div>
  )
}
