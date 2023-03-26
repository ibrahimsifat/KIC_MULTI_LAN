import React from "react";
import { useHistory } from "react-router";
import useClients from "../../shared/useClients";
import SingleClients from "./SingleClients";

const AllClientsDetails = () => {
  const [clients] = useClients();
  // console.log("clients", clients);
  let history = useHistory();
  const handleClientDetails = (id) => {
    const url = `allclientsdetails/${id}`;
    history.push(url);
    // console.log(id);
  };
  return (
    <div className="">
      <div className="container mx-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-3  gap-3 my-0 py-16 ">
        {clients.map((client) => (
          <SingleClients
            key={client.id}
            client={client}
            handleClientDetails={handleClientDetails}
          ></SingleClients>
        ))}
      </div>
    </div>
  );
};
export default AllClientsDetails;
