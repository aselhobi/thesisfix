import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function About() {
  return (
    <div className="container mx-auto mt-4 px-8 py-12 bg-white">

    <div className = "flex flex-col items-center">
      <h1 className="text-6xl  mb-8"> About us</h1>
      <h2 className="text-lg font-medium  mb-8 text-center" >
        Who we are and why we do what we do
      </h2>
      </div>
      <h1 className ="text-2xl text-left  mx-16 font-medium mb-8">
        OUR STORY
      </h1>
      <h2 className ="text-xl text-left  mx-16 font-medium mb-8">
      Welcome to SHOPPE - Your Ultimate Online Fashion Destination
      </h2>
      <p className = "text-lg mx-16 mb-4">
        In the heart of the digital era, amidst a world brimming with infinite choices, SHOPPE emerged as a beacon for
        fashion enthusiasts craving a curated selection of apparel and accessories. Founded in 2024, we embarked on a
        mission to not just give filtering options, but to redefine the shopping experience, making it seamless, personal, and truly
        enjoyable.

      </p>
      <p className = "text-lg mx-16 mb-4">The platform offers users the ability to filter search results by color and price, as well as choose which shops to include in the search. Currently, the website integrates three popular fashion retailers: Zara, H&M and Stradivarius. Importantly, the results provided are always up-to-date, ensuring users have access to the latest available inventory.

</p>

<p className = "text-lg mx-16 mb-4">
The website is built using web scraping techniques, leveraging the JavaScript framework Puppeteer for data extraction. Dynamic data handling is facilitated by Express.js, which serves as the backend service. This combination of tools, along with Node.js, enables efficient data retrieval and processing.
On the frontend, React JSX is utilized to create a user-friendly interface, with routers facilitating smooth navigation. Styling is achieved using Tailwind CSS, a versatile utility-first CSS framework, allowing for rapid development and customization of components and pages.
</p>
<p className = "text-lg mx-16 mb-4">
Moving forward, the project has the potential to expand its shop offerings by integrating additional retailers, further enhancing the user experience and providing access to an even wider range of clothing options.
</p>
  
    </div>
  );
}

export default About;
