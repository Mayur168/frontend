// import React from 'react'

// export const  ContectDetails  = () => {
//   return (
//     <div>
//       <h1>ContectDetails</h1>
//     </div>
//   );
// };


import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchContacts } from '../API/Api';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactDetails = () => {
  const { data: contacts, isLoading, error } = useQuery({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
  });

  if (isLoading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5">Error: {error.message}</div>;

  return (
    <div className="container mt-5">
      <h1>Contact Details</h1>
      {contacts && contacts.length > 0 ? (
        <ul className="list-group">
          {contacts.map((contact) => (
            <li key={contact.id} className="list-group-item">
              {contact.name} - {contact.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};