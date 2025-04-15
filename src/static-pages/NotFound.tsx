import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="text-center p-6 bg-white rounded-lg w-[500px]">
        <div className="flex justify-center mb-4">
          <svg viewBox="0 0 112 112" width="112" height="112" className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq">
            <defs>
              <clipPath id="a">
                <path fill="none" d="M100.31 101.1H39.45V12.8h40.78l20.08 21.03v67.27z"></path>
              </clipPath>
            </defs>
            <path
              d="M38.54 39.69h1.82a11.78 11.78 0 0 1 11.78 11.78v13.6H26.77v-13.6a11.78 11.78 0 0 1 11.77-11.78z"
              stroke-miterlimit="10"
              stroke-width="9.48"
              stroke="#a4a7ab"
              fill="none"
            ></path>
            <g clip-path="url(#a)">
              <path fill="#90c3ff" d="M100.31 101.1H39.45V12.8h40.78l20.08 21.03v67.27z"></path>
              <path d="M80.28 10.59h23.26v23.26H87.32a7 7 0 0 1-7-7V10.59h-.04z" fill="#1876f2"></path>
              <path
                d="M38.54 39.69h1.82a11.78 11.78 0 0 1 11.78 11.78v13.6H26.77v-13.6a11.78 11.78 0 0 1 11.77-11.78z"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="9.48"
                fill="none"
              ></path>
            </g>
            <rect x="10.54" y="58.29" width="57.83" height="42.76" rx="4.41" fill="#64676b"></rect>
            <circle cx="39.45" cy="75.25" r="6.3"></circle>
            <path d="M36.62 73.73h5.67v12.48a2.63 2.63 0 0 1-2.63 2.63h-.41a2.63 2.63 0 0 1-2.63-2.63V73.73z"></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-500 mb-1">This content isn't available right now</h1>
        <p className="text-gray-600 text-base leading-5 mb-6">
          When this happens, it's usually because the owner only shared it with a small group of people, changed who can see it or it's been
          deleted.
        </p>
        <div className="flex flex-col items-center space-y-1">
          <button className="bg-blue-600 font-medium text-white px-8 py-2 rounded-md hover:bg-blue-700">Go to News Feed</button>
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Go back
          </Link>
          <Link to="#" className="text-blue-600 font-medium hover:underline">
            Visit Help Center
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
