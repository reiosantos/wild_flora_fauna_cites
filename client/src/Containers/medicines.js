import React from 'react';
import { data } from './medicine.json';

export const Medicines = () => {
  return (
    <div className="medicines">
      <h3>Endangered Medicinal Plants</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Scientific</th>
            <th>Description</th>
            <th>Status</th>
            <th>Appendix</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map(med => (
            <tr key={med.id}>
              <td>{med.name}</td>
              <td>{med.scientific}</td>
              <td>{med.description}</td>
              <td>{med.status}</td>
              <td>{med.appendix}</td>
              <td>
                <img src={med.image} alt="med" width="200px" height="150px"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
