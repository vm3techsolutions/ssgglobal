import headingIcon from "../assets/icon.png";
import indiaFlag from "../assets/india.png";
import singaporeFlag from "../assets/singapore.png";
import malaysiaFlag from "../assets/malaysia.png";
import australiaFlag from "../assets/australia.png";
import usaFlag from "../assets/usa.png";
import indonesiaFlag from "../assets/indonesia.png";
import philippinesFlag from "../assets/philippines.png";

const contacts = [
  { location: "Chennai", name: "Srimathi Devika", phone: "+91 9840 0594 64", flag: indiaFlag },
  { location: "Salem", name: "Dr. Selvi", phone: "+91 9487 2155 71", flag: indiaFlag },
  { location: "Bangalore", name: "Mr. Raja", phone: "+91 9148 7671 92", flag: indiaFlag },
  { location: "Singapore", name: "Madam Abirahmi", phone: "+65 9004 5920", flag: singaporeFlag },
  { location: "Singapore", name: "Mr. Shanmugam", phone: "+65 9852 2130", flag: singaporeFlag },
  { location: "Malaysia", name: "Sai Iswaran", phone: "+60 1692 9195 4", flag: malaysiaFlag },
  { location: "Malaysia", name: "Kanageswary", phone: "+60 1649 3387 0", flag: malaysiaFlag },
  { location: "Malaysia", name: "Devi Kamaachi Paramasuarann", phone: "+60 11 5556 5513", flag: malaysiaFlag },
  { location: "Australia", name: "Dr. Vishwanath Deshmukh", phone: "+61 4068 1777 5", flag: australiaFlag },
  { location: "United States (US)", name: "Logan Krishna", phone: "+1 5877 2357 78", flag: usaFlag },
  { location: "Medan, Indonesia", name: "Baba Mohan Leo", phone: "+62 8116 1633 4", flag: indonesiaFlag },
  { location: "Medan, Indonesia", name: "Mr. A. Thirumal", phone: "+62 8116 1560 9", flag: indonesiaFlag },
  { location: "Philippines", name: "Jay Murugan", phone: "+63 9195 0007 70", flag: philippinesFlag },
];

const ContactTable = () => {
  return (
    <div className="container mx-auto py-12">
     <div className="text-center mb-8 ">
        <div className="flex items-center justify-center md:gap-4 sm:gap-1">
          <img src={headingIcon} className="h-12" alt="icon" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
            Overseas Contact
          </h2>
          <img src={headingIcon} className="h-12" alt="icon" />
        </div>
      </div>

      {/* <div className="overflow-x-auto">
  <table className="min-w-full  shadow-md rounded-lg overflow-hidden table-auto border">
    <thead>
      <tr className="bg-[#800080] text-white text-sm md:text-xl">
        <th className="px-2 py-2 sm:px-4 border">Location</th>
        <th className="px-2 py-2 sm:px-4 border">Name</th>
        <th className="px-2 py-2 sm:px-4 border">Phone</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact, index) => (
        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#FFFFF0]"}>
          <td className="px-3 py-3 flex items-center TableText gap-2 border">
            <img src={contact.flag} alt={contact.location} className="h-5 w-8" />
            {contact.location}
          </td>
          <td className="py-3 px-6 TableText border">{contact.name}</td>
          <td className="py-3 px-6 TableText border">
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="underline hover:text-blue-800">
              {contact.phone}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div> */}


<div className="overflow-x-auto">
        <table className="min-w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden ">
          
       <thead>
       <tr className="text-white bg-gradient-to-r from-[#800080] via-[#ad06ad] to-[#800080]">
            <th className="py-3 px-6 text-left text-xl w-1/3 border-1 BorderColor">Location</th>
              <th className="py-3 px-6 text-left text-xl w-1/3 border-1 BorderColor">Name</th>
              <th className="py-3 px-6 text-left text-xl w-1/3 border-1 BorderColor">Phone</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white border-1 BorderColor" : "bg-[#FFFFF0] border-1 BorderColor "}
              >
                <td className="py-3 md:font-bold md:text-lg px-6  flex items-center gap-2 text-xs">
                <img src={contact.flag} alt={contact.location} className="h-5 w-8" />
                {contact.location}</td>
                <td className="py-3 px-6 border-1 BorderColor md:font-bold md:text-lg text-xs">{contact.name}</td>
                <td className="py-3 px-3 border-1 BorderColor md:font-bold md:text-lg text-xs">
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="underline hover:text-blue-800">{contact.phone}</a></td>
              </tr>
              ))}
          </tbody>
          <hr className="text-white "/>

          </table>
      </div>

    </div>
  );
};

export default ContactTable;
