import React from "react";
import headingIcon from "../assets/icon.png";

const members = [
  { name: "Swami Subrahmanyam Giri", role: "President / Founder" },
  { name: "Sri Baburao Namdev Malk", role: "Vice President" },
  { name: "Sri Ganesh Bhanudas Jadhav", role: "Secretary" },
  { name: "Sri Devidas Ramrao Nikam", role: "Treasurer" },
  { name: "Sri Mohan Velu Mudaliyar", role: "Trustee" },
  { name: "Sri Raman Balsubramanyam", role: "Trustee" },
  { name: "Sri K.M. Mahadevan", role: "Trustee" },
  { name: "Sow Jaya M Mahadevan", role: "Trustee" },
  { name: "Sow B Devika Bhupathy", role: "Trustee" },
];

const TrustTable = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2">
          <img src={headingIcon} className="h-12" alt="icon" /> {/* Left Icon */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
            Sai Sakthi Sant Trust
          </h2>
          <img src={headingIcon} className="h-12" alt="icon" /> {/* Right Icon */}
        </div>
      </div>

      <div className="overflow-x-auto flex justify-center">
      <table className=" bg-white shadow-md rounded-lg overflow-hidden mx-auto my-4">
          <thead className="">
          <tr className="text-white bg-gradient-to-r from-[#800080] via-[#ad06ad] to-[#800080]">
          <th className="py-3 px-6 text-left text-xl w-1/2 border BorderColor">Name</th>
              <th className="py-3 px-6 text-left text-xl w-1/2  BorderColor">
                Board of Trustees
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white  Border2" : "bg-[#FFFFF0] Border2"}
              >
                <td className="py-3 px-6 border-1 BorderColor font-bold text-lg ">{member.name}</td>
                <td className="py-3 px-6 border-1 BorderColor font-bold text-lg ">{member.role}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="py-4 px-6 text-center text-xl font-bold ">
                Registration Number: Ahmednagar/ 0000421 / 2024
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TrustTable;
