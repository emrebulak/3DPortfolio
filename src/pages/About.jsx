import { skills, experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Emre</span></h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>🚀 I'm a Full Stack JavaScript Developer turning dreams into reality through code. I have extensive experience with the JavaScript ecosystem (Node.js, React.js), and other modern technologies.</p>
        <p>🛠️ I not only write code but also focus on delivering user-friendly and effective solutions. I possess the flexibility to work across a broad spectrum, from frontend to backend development.</p>
        <p>👨‍💻 I excel in project management and team interactions. My communication skills and solution-oriented approach set me apart in solving complex problems and driving projects to success.</p>
        <p> 🌐 By exploring the projects on my profile, you can gain more insights about me and consider opportunities for collaboration. I am excited about the prospect of working together on new projects!</p>
        <p>📬 You can reach me at baranemrebulak@gmail.com or through LinkedIn. I look forward to hearing from you and running towards success together!</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={`skill-${index}`} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement key={experience.company_name} date={experience.date} icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                </div>
              }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{ borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg, boxShadow: 'none' }}>
                <div>
                  <h3 className="text-black text-lg font-poppins font-semibold">{experience.title}</h3>
                  <p style={{ margin: 0 }} className="text-black-500 font-medium text-base">{experience.company_name}</p>
                  {/* <p className="text-sm">{experience.date}</p>
                  <p className="text-base">{experience.description}</p> */}
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li className="text-black-500/50 font-normal pl-1 text-sm" key={`experience-point-${index}`}>{point}</li>
                  ))}
                </ul>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  )
}

export default About