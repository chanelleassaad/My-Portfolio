export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32 border-section">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:max-w-lg pb-10">
          About Me
        </h2>
      </div>
      <div className="flex gap-x-6">
        <img
          className="h-20 w-20 rounded-full"
          src="https://media.licdn.com/dms/image/C5603AQGZ_1V3uilYOg/profile-displayphoto-shrink_800_800/0/1647940543873?e=1714003200&v=beta&t=oRcAYmTwBeBs51zvCL45MqnydYx-53Z6janCtXc0BFQ"
          alt=""
        />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            Chanelle Assaad
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            Computer Engineer
          </p>
        </div>
      </div>
      <div className="text-left">
        <p className="text-base text-gray-700 mt-4">
          I have a Bachelor's degree in Computer Engineering from Lebanese
          American University. I also minored in Business to enhance my
          understanding of the industry.
        </p>
        <p className="text-base text-gray-700 mt-2 ">
          I am a passionate computer engineer with experience in developing web
          applications and software solutions. My expertise includes front-end
          development with HTML, CSS, and JavaScript, as well as UI/UX design
          with Figma. I enjoy learning new technologies and solving complex
          problems.
        </p>
        <p className="text-base text-gray-700 mt-2">
          In my free time, I like to contribute to open-source projects and
          explore the latest trends in technology. I am dedicated to continuous
          learning and improvement, always striving to enhance my skills and
          knowledge.
        </p>
      </div>
    </div>
  );
}
