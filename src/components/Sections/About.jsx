
export const About = () => {

    const frontendSkills = ["HTML","CSS","Javascript","React",
        "TailwindCss"]

    const backendSkills = ["Nodejs",
        "expressjs",
         "MongoDB"]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
              text-transparent text-center">About Me</h2>

           <div className="glass rounded-xl p-8 border-white/10 border hover-translate-y-1 transition-all">
               <p className="text-gray-300 mb=6">
                Passionate developer with expertise in building scalable Web applications and creating
                innovative solutions.
               </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
             <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                 <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                 <div className="flex flex-wrap gap-2">
                     <div>
                         {frontendSkills.map((tech,key) =>(
                             <span
                                 key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition}"
                             >
                                 {tech}
                             </span>
                         ))}
                     </div>


                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech,key) =>(
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition}"
                            >
                             {tech}
                         </span>
                        ))}
                    </div>
                </div>
                 </div>
            </div>
            </div>
           </div>

             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
                 <div className="p-6 rounded-xl border-white/10 border hover-translate-y-1 transition-all">
                     <h3 className=" text-xl font-bold mb-4">📚Education</h3>
                     <ul className="list-disc list-inside text-gray-300 space-y-2">
                         <li>
                             <strong>High school diploma</strong> KAG MCDC  2012-2015
                         </li>
                         <li>
                             <strong>frontend bootcamp</strong> Dive Africa project 2025
                         </li>
                     </ul>
                 </div>

                 <div className="p-6 rounded-xl border-white/10 border hover-translate-y-1 transition-all">
                     <h3 className=" text-xl font-bold mb-4">Work Experience</h3>
                     <div>
                         <h4 className="font-semibold">Interrn at Dive Africa</h4>
                         <p>
                             Assisted in building front-end components and integrating REST API
                         </p>
                     </div>
                 </div>
             </div>

           </div>

        </section>
    )
}
