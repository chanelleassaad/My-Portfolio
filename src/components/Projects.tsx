const projects = [
    { id: 1, description: 'Built an online bookstore website allowing users to add and remove books from the cart, check the final balance, and review books already purchased. The website was built using Angular for the frontend and Node.js for the backend', name: 'Bookstore' },
    { id: 2, description: ' Created a VR application offering several modes for different types of meditation. Users can choose from various meditation modes for a personalized experience. This application was developed using AFrame, a web framework for building virtual reality experiences.', name: 'Meditation App' },
    { id: 3, description: 'Designed and developed a head-tilt controlled wheelchair for individuals with mobility impairments. The wheelchair is operated by detecting the user\'s head movements using a Raspberry Pi and Python, allowing them to control the wheelchair\'s direction and movement.', name: 'Head-tilt Controlled Wheelchair' },
  ]
  
  export default function Projects() {
    return (
        
      <div className="border-section py-24 sm:py-32">
        <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:max-w-lg pb-10">
          My Projects
        </h2>
      </div>
        <div className="mx-auto max-w-10xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{project.description}</dt>
                <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-2xl">
                  {project.name}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  