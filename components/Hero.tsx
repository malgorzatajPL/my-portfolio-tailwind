

export default function Hero() {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
          window.scrollTo({
            top: element.offsetTop,  
            behavior: 'smooth',
          });
        }
      };
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
          Hi, I am a frontend developer
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          I have 3 years of experience. My passion is creating responsive
          websites using React, NextJS, Tailwind, Typescript. My goal is to be a
          Fullstack developer. 
        </p>
        <button
          onClick={scrollToProjects}   
          className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition"
        >
          My projects
        </button>
      </div>
    </section>
  );
}
