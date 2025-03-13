import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import headingIcon from "../assets/icon.png";

const About_Us = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto sm:px-6 py-6">
      {/* Heading with Icons */}

      <div className="overflow-x-auto flex justify-center">
        <table className="bg-white shadow-md overflow-hidden w-full max-w-2xl text-left md:ml-4 2xl:ml-18 text-sm sm:text-base">
          <thead>
            <tr className="text-gray-900 text-xl fw-bold border">
              <th
                colSpan={2}
                className="py-3 px-4 sm:px-6 text-center font-semibold w-full"
              >
                Bank Details
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                field: "NAME",
                detail: "SAISHAKTI SANT SWAMI SUBRAMHNYAMGIRI MAH",
                color: "text-blue-700",
              },
              { field: "BANK NAME", detail: "STATE BANK OF INDIA" },
              {
                field: "CURRENT A/C NO.",
                detail: "43595237806",
                color: "text-red-600",
              },
              {
                field: "IFSC",
                detail: "SBIN0000414",
                color: "text-purple-700",
              },
              { field: "BRANCH", detail: "ACB KOPARGAON" },
              {
                field: "BANK ADDRESS",
                detail:
                  "GODAM ROAD, DIST - AHMED NAGAR, TALUKA - KOPARGAON, MAHARASHTRA - 423 001",
              },
              { field: "E-MAIL", detail: "subramhnyamgiriswami@gmail.com" },
            ].map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : ""}>
                <td className="font-semibold py-3 px-4 sm:px-6 border border-gray-300 w-1/4">
                  {item.field}
                </td>
                <td
                  className={`py-3 px-4 font-semibold sm:px-6 border border-gray-300 w-2/4 ${
                    item.color || ""
                  }`}
                >
                  {item.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default About_Us;
