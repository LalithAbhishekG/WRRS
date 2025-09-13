import herobg from '../../Assets/Home/home-bg.mp4';


export default function Homehero() {

return(

    <div>
        <div className="w-full h-screen">
  {/* Background Video */}
  <video
    src={herobg}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />

  {/* Overlay Content */}
  <div className="w-full h-full flex flex-col items-center justify-center -mt-[100vh] text-center px-4">
    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-md mt-10">
      "Best way to make a differences in the{" "}
      <span className="text-[#BC1EB0]">lives of others</span>"
    </h1>

    <button className="mt-6 bg-white text-[#BC1EB0] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
      Donate now 
    </button>

    
  </div>
</div>



    </div>
);


};