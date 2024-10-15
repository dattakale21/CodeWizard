import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from './Navbar';
import "./developer.css"; // Import the CSS file for styling
import "./hero.css"; // Import the CSS file for styling
import dattaImage from './datta.png';
import samiImage from './sami.png';


const developersData = [
  {
    name: "Amit Potghan",
    role: "Backend Developer",
    description: "Amit is an expert in server-side logic and database management, playing a key role in developing robust backend solutions that ensure efficient data handling and smooth communication between the frontend and databases. With a strong focus on scalability and performance, he designs systems that can handle large-scale operations while maintaining stability and speed. Amit is highly skilled in API integration, optimizing database queries, and ensuring security and reliability in data transactions. His problem-solving abilities enable him to tackle complex challenges, providing seamless backend support that enhances the overall functionality and user experience of web applications.",
    photo: "/path/to/amit-photo.jpg", // Replace with the actual path to Amit's photo
    socials: {
      twitter: "https://twitter.com/amitpotgan",
      github: "https://github.com/amitpotgan",
      linkedin: "https://linkedin.com/in/amitpotgan",
      instagram: "https://instagram.com/amitpotgan",
      email: "amit@example.com"
    },
  },
  {
    name: "Sami Shaikh",
    role: "Backend Developer",
    description: "Sami is a highly skilled backend developer specializing in creating scalable and efficient backend solutions for web and mobile applications. He excels in designing and implementing server-side architectures that can handle high traffic and large amounts of data without compromising performance. With expertise in database management, API development, and cloud technologies, Sami ensures that systems are optimized for speed, security, and reliability. His ability to troubleshoot and solve complex backend issues enables him to build systems that are both flexible and future-proof, supporting the growth and scalability of businesses in dynamic, high-demand environments.",
    photo: samiImage, // Replace with the actual path to Sami's photo
    socials: {
      twitter: "https://twitter.com/samishaikh",
      github: "https://github.com/samishaikh",
      linkedin: "https://www.linkedin.com/in/sami-shaikh-46a8b423b",
      instagram: "https://instagram.com/samishaikh",
      email: "sami@example.com"
    },
  },
  {
    name: "Prathmesh Shelar",
    role: "Backend Developer",
    description: "Prathmesh is a talented backend developer with a strong focus on API development and system architecture. He excels in designing and implementing robust APIs that ensure seamless communication between different services and components within applications. With deep expertise in crafting scalable and efficient system architectures, Prathmesh creates solutions that are not only reliable but also flexible enough to adapt to evolving requirements. His experience in optimizing performance, ensuring security, and managing complex integrations allows him to deliver backend systems that enhance the overall functionality and scalability of applications, providing a solid foundation for future growth and development.",
    photo: "/path/to/prathmesh-photo.jpg", // Replace with the actual path to Prathmesh's photo
    socials: {
      twitter: "https://twitter.com/prathmeshshelar",
      github: "https://github.com/prathmeshshelar",
      linkedin: "https://linkedin.com/in/prathmeshshelar",
      instagram: "https://instagram.com/prathmeshshelar",
      email: "prathmesh@example.com"
    },
  },
  {
    name: "Mayur Saibane",
    role: "Frontend Developer",
    description: "Mayur is a skilled frontend developer with a strong specialization in UI/UX design. He focuses on creating visually appealing, user-friendly interfaces that provide seamless interactions and enhance the overall user experience. With a keen eye for detail and a deep understanding of user behavior, Mayur ensures that every element of the interface is intuitive and functional. He has expertise in modern frontend technologies, including HTML, CSS, JavaScript, and various frameworks, enabling him to build responsive, high-performance websites and applications. Mayur's designs prioritize usability and aesthetics, creating digital products that engage users and meet business objectives effectively.",
    photo: "/path/to/mayur-photo.jpg", // Replace with the actual path to Mayur's photo
    socials: {
      twitter: "https://twitter.com/mayursaibane",
      github: "https://github.com/mayursaibane",
      linkedin: "https://linkedin.com/in/mayursaibane",
      instagram: "https://instagram.com/mayursaibane",
      email: "mayur@example.com"
    },
  },
  {
    name: "Datta Kale",
    role: "Frontend Developer",
    description: "Datta is a talented frontend developer with expertise in creating responsive web applications using modern frameworks like React.js and TailwindCSS. He focuses on building user-friendly interfaces that adapt seamlessly across devices, ensuring a smooth experience for all users. Datta’s proficiency in modern web development tools and frameworks enables him to develop fast, efficient, and scalable applications. He has a strong understanding of UI/UX principles, ensuring that his designs are not only visually appealing but also intuitive. Datta's attention to detail and commitment to writing clean, maintainable code make him a valuable asset in any development project.",
    photo: dattaImage, // Replace with the actual path to Datta's photo
    socials: {
      twitter: "https://twitter.com/dattakale",
      github: "https://github.com/dattakale21",
      linkedin: "https://www.linkedin.com/in/kaledatta",
      instagram: "https://instagram.com/dattakale",
      email: "dattakale2008@gmaill.com"
    },
  },
];

const Socials = ({ socials }) => {
  return (
    <div className="socials mt-4 flex justify-center">
      {socials.twitter && (
        <a href={socials.twitter} target="_blank" rel="noreferrer" className="social mx-2">
          <FontAwesomeIcon icon={faTwitter} className="social-icon " />
        </a>
      )}
      {socials.github && (
        <a href={socials.github} target="_blank" rel="noreferrer" className="social mx-2">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
      )}
      {socials.linkedin && (
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="social mx-2">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      )}
      {socials.instagram && (
        <a href={socials.instagram} target="_blank" rel="noreferrer" className="social mx-2">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
      )}
      {socials.email && (
        <a href={`mailto:${socials.email}`} target="_blank" rel="noreferrer" className="social mx-2">
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
        </a>
      )}
    </div>
  );
};

const Developers = () => {
  return (
    <div className="developers-section bg-cover bg-center h-screen flex flex-col   w-full">
      <Navbar />
      <div className="developers-container w-full max-w-5xl p-4 mx-auto">
        <h1 className="heading text-center text-4xl my-8">Meet Our Developers</h1>
        {developersData.map((developer, index) => (
          <div key={index} className="developer-row flex flex-col md:flex-row items-center my-8 w-full">
            {index % 2 === 0 ? (
              <>
                <div className="developer-photo w-full md:w-1/3 flex flex-col items-center p-4">
                  <img
                    src={developer.photo}
                    alt={developer.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg mb-2"
                  />
                  <Socials socials={developer.socials} />
                </div>
                <div className="developer-info w-full md:w-2/3 md:px-8 mt-4 md:mt-0">
                  <h2 className="text-2xl">{developer.name}</h2>
                  <h3 className="text-xl role text-teal-500">{developer.role}</h3>
                  <p className="mt-2 max-w-2xl">{developer.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="developer-info w-full md:w-2/3 md:px-8 mt-4 md:mt-0">
                  <h2 className="text-2xl">{developer.name}</h2>
                  <h3 className="text-xl role text-teal-500">{developer.role}</h3>
                  <p className="mt-2 max-w-2xl">{developer.description}</p>
                </div>
                <div className="developer-photo w-full md:w-1/3 flex flex-col items-center p-4">
                  <img
                    src={developer.photo}
                    alt={developer.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg mb-2"
                  />
                  <Socials socials={developer.socials} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <footer className="footer bg-gray-800 text-white w-full h-12">
                <p id="foot" className="text-center">
                    Copyright © 2024 CodeWizards. All rights reserved |
                    <span style={{ margin: '0 5px' }}>Developed with ❤️ by CodeWizards Team.</span>
                </p>
            </footer>
    </div>
  );
};


export default Developers;
