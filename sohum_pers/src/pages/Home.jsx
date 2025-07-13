import { ThemeToggle } from '../components/ThemeToggle'
import { NavBar } from '../components/NavBar'
import MagnetLines from '../components/MagnetLines'

export default function Home() {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* theme toggle */}
            <ThemeToggle />

            {/* navbar */}
            <NavBar />

            {/* hero section */}
            <section id="hero" className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-6xl w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left side - Text content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                <span className="text-glow">Sohum</span> Trivedi
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/70 mb-6">
                                Computer Science & Finance Student
                            </p>
                            <p className="text-lg text-foreground/60 mb-8">
                                University of Pennsylvania • Jerome Fisher M&T Program
                            </p>
                            <div className="flex justify-center lg:justify-start space-x-4">
                                <a href="#about" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                                    About Me
                                </a>
                                <a href="#contact" className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                                    Contact
                                </a>
                            </div>
                        </div>

                        {/* Right side - MagnetLines (only in dark mode) */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <div className="hidden dark:block">
                                <MagnetLines
                                    rows={12}
                                    columns={12}
                                    containerSize="400px"
                                    lineColor="#444444"
                                    lineWidth="2px"
                                    lineHeight="20px"
                                    baseAngle={0}
                                    className="rounded-full overflow-hidden"
                                    style={{ 
                                        borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 70%, transparent 100%)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* about section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
                    
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                            I'm Sohum, a student at Penn studying computer science and finance. I build things with code, 
                            analyze markets, and somehow convinced 4 private equity firms to use my PDF reader.
                        </p>
                        
                        <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                           In my free time, I love thrifting, cooking for no reason, 
                            or building PCs (because apparently I enjoy expensive hobbies).
                        </p>
                        
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Always down to chat about tech, startups, or why that sweater was definitely worth $30.
                        </p>
                    </div>
                </div>
            </section>

            {/* work section */}
            <section id="work" className="py-20 px-4 bg-card">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work</h2>
                    
                    <div className="space-y-16">
                        {/* Experience */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-8">Experience</h3>
                            <div className="space-y-6">
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <h4 className="text-xl font-semibold mb-2">Research Intern</h4>
                                    <p className="text-foreground/70 mb-3">Princeton University - Puchalla Lab</p>
                                    <p className="text-foreground/80">
                                        Developed applications to build 3D models from layering 2D TIRF images and engineered 
                                        affordable microscope attachments for TIRF imaging, replacing costly specialized equipment.
                                    </p>
                                </div>
                                
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <h4 className="text-xl font-semibold mb-2">Research Assistant</h4>
                                    <p className="text-foreground/70 mb-3">Georgia Tech Research Institute</p>
                                    <p className="text-foreground/80">
                                        Created machine learning models for early Cystic Fibrosis detection, analyzing 20,000+ patient 
                                        records with 30+ biomarkers and implementing interactive GUI for real-time patient monitoring.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Projects */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-8">Projects</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <h4 className="text-xl font-semibold mb-2">CIMez</h4>
                                    <p className="text-foreground/70 mb-3">AI-powered PDF intelligence platform</p>
                                    <p className="text-foreground/80 mb-4">
                                        Complete processing pipeline for PDF analysis using PyMuPDF, local LLMs, and React frontend.
                                    </p>
                                    <div className="flex space-x-2">
                                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">Python</span>
                                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">React</span>
                                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">LLMs</span>
                                    </div>
                                </div>
                                
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <h4 className="text-xl font-semibold mb-2">EchoMatch</h4>
                                    <p className="text-foreground/70 mb-3">Personal audio-similarity engine</p>
                                    <p className="text-foreground/80 mb-4">
                                        Shazam-style pipeline using mel-spectrograms and CLAP embeddings. Achieved 93% top-5 recall 
                                        on Million Song Dataset with sub-200ms response time.
                                    </p>
                                    <div className="flex space-x-2">
                                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">Python</span>
                                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">ML</span>
                                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">FastAPI</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Leadership */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-8">Leadership</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <h4 className="text-xl font-semibold mb-2">TechEase</h4>
                                    <p className="text-foreground/70 mb-3">Founding President</p>
                                    <p className="text-foreground/80">
                                        Nonprofit initiative helping elderly with technology. Built partnerships with YMCA and 30+ senior homes, 
                                        providing digital literacy training to 60,000+ older adults.
                                    </p>
                                </div>
                                
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <h4 className="text-xl font-semibold mb-2">IvyAcademy+</h4>
                                    <p className="text-foreground/70 mb-3">Founding Co-President</p>
                                    <p className="text-foreground/80">
                                        Generated $77,000+ in profit while assisting 100+ students with personalized college consulting 
                                        and admissions strategy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Honors */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-8">Honors</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <a href="https://www.coca-colascholarsfoundation.org/" target="_blank" rel="noopener noreferrer" 
                                       className="text-foreground/60 text-sm mb-2 block hover:text-primary transition-colors">
                                        Coca-Cola Scholars Foundation ↗
                                    </a>
                                    <h4 className="text-xl font-semibold">Coca-Cola Scholar</h4>
                                </div>
                                
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <a href="https://www.nationalmerit.org/" target="_blank" rel="noopener noreferrer"
                                       className="text-foreground/60 text-sm mb-2 block hover:text-primary transition-colors">
                                        National Merit Scholarship Corporation ↗
                                    </a>
                                    <h4 className="text-xl font-semibold">National Merit Scholar</h4>
                                </div>
                                
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <a href="https://www.societyforscience.org/regeneron-isef/" target="_blank" rel="noopener noreferrer"
                                       className="text-foreground/60 text-sm mb-2 block hover:text-primary transition-colors">
                                        Society for Science ↗
                                    </a>
                                    <h4 className="text-xl font-semibold">Regeneron ISEF Finalist</h4>
                                </div>
                                
                                <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/5">
                                    <a href="https://www.seas.upenn.edu/undergraduate/student-life/awards-and-fellowships/biomedical-innovation-award/" target="_blank" rel="noopener noreferrer"
                                       className="text-foreground/60 text-sm mb-2 block hover:text-primary transition-colors">
                                        Penn Engineering ↗
                                    </a>
                                    <h4 className="text-xl font-semibold">Biomedical Innovation Award</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact section */}
            <section id="contact" className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
                    
                    <div className="space-y-6">
                        <p className="text-lg text-foreground/70 mb-8">
                            I'm always open to discussing new opportunities, projects, or just connecting!
                        </p>
                        
                        <div className="flex justify-center space-x-8">
                            <a href="mailto:sohumt@wharton.upenn.edu" 
                               className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
                                <span>email: </span>
                                <span>sohumt [at] wharton [dot] upenn [dot] edu</span>
                            </a>
                            <a href="tel:+14707021634" 
                               className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
                                <span>phone: </span>
                                <span>(470) 702-1634</span>
                            </a>
                        </div>
                        
                        <div className="pt-8">
                            <a href="https://linkedin.com/in/sohumtrivedi" 
                               className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                                <span>LinkedIn</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <footer className="py-8 px-4 bg-card text-center">
                <p className="text-foreground/60">
                    © 2025 Sohum Trivedi. Built with React & Tailwind CSS.
                </p>
            </footer>
        </div>
    )
}
