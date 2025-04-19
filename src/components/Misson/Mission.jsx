import React from 'react';

const Mission = () => {
  return (
    <div className="w-full px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 2xl:px-60 py-20 bg-blue-50 flex flex-col items-center text-navy">
      <div className="w-16 sm:w-20">
        <img src="public/images/logowotext.png" alt="logo" className="w-full h-auto object-contain" />
      </div>

      <h1 className="font-dm mt-5 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-center">
        Mission
      </h1>

      <div className="mt-7 space-y-6 text-base sm:text-lg font-inter font-medium text-center max-w-5xl">
        <p>
          VIROH: A place for overall development, VIROH facilitates learning, growth and development among children with special needs. It works to provide support to children, parents, special educators, and mainstream teachers. It has three divisions: Intervention Unit, Training Unit and Publication Unit. VIROH gives opportunities to young and seeking professionals to explore and understand the field of disability. It aims to empower children and their families to the best of their abilities.
        </p>
        <p>
          Our goal is to create a network of happy and empowered individuals. We make this possible by providing training in life skills and by strengthening their academic and pre-vocational skills. Our errand is to train passionate, sensitive and compassionate educators by teaching them special education skills.
        </p>
        <p>
          We also take charge of publishing useful resources (books and articles) for those who are specializing with children having special needs. These printed resources will be one shot direct solutions for their challenges.
        </p>
        <p className="text-lg sm:text-xl italic underline">
          LET'S BE RESPONSIBLE AND CHANGE PEOPLE'S NEGATIVE & HOPELESS ATTITUDE TOWARDS DISABILITIES.
        </p>
      </div>
    </div>
  );
};

export default Mission;
