import { skills } from "../constants"

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
          {skills.map((skill)=> (
            <div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default About