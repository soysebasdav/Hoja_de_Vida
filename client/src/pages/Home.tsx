/**
 * Design Philosophy: Glassmorphism Technological
 * - Translucent layers with backdrop blur
 * - Deep blue to purple gradient background
 * - Cyan and magenta accent colors
 * - Fluid transitions and micro-interactions
 * - Sophisticated, futuristic aesthetic
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Code,
  Globe,
  Database,
  Smartphone,
  GraduationCap,
  Languages,
  Download,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Base URL para que funcione en GitHub Pages (/Hoja_de_Vida/) y en local (/)
  const base = import.meta.env.BASE_URL;
  const asset = (p: string) => `${base}${p.replace(/^\/+/, "")}`; // quita "/" inicial si existe

  const skills = {
    languages: [
      { name: "C# (Unity)", level: 90, icon: Code },
      { name: "Dart (Flutter)", level: 85, icon: Smartphone },
      { name: "JavaScript", level: 80, icon: Globe },
      { name: "Python", level: 75, icon: Code },
      { name: "SQL", level: 80, icon: Database },
    ],
    frameworks: [
      { name: "Unity (VR)", category: "Realidad Virtual" },
      { name: "Flutter", category: "Desarrollo Móvil" },
      { name: "Desarrollo Web", category: "Frontend" },
      { name: "Chatbots", category: "IA & Automatización" },
    ],
    tools: [
      "Git & GitHub",
      "Linux",
      "Power BI",
      "Azure SQL",
      "MySQL",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],
  };

  const experience = [
    {
      title: "Programador Senior / Líder Técnico",
      company: "Braco Estudio",
      period: "Enero 2025 – Enero 2026",
      highlights: [
        "Dirección técnica de aplicaciones VR con Unity (C#) para entornos educativos y empresariales",
        "Desarrollo de aplicaciones móviles multiplataforma con Flutter (Dart)",
        "Desarrollo web front-end con integración de componentes y optimización de conversión",
        "Diseño e integración de chatbots web para automatización",
        "Implementación de soluciones end-to-end desde arquitectura hasta producción",
        "Gestión de versiones, entregas y soporte post-lanzamiento",
      ],
      image: asset("images/vr-development.png"),
    },
    {
      title: "Production Support Engineer",
      company: "Movizzon",
      period: "Febrero 2024 – Agosto 2024",
      highlights: [
        "Soporte y mantenimiento de sistemas en producción",
        "Análisis y resolución de incidencias técnicas",
        "Automatización de procesos y gestión de bases de datos",
      ],
      image: asset("images/web-tech.png"),
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url('${asset("images/tech-pattern.png")}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('${asset("images/hero-background.png")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text animate-fade-in-up">
                  SEBASTIÁN DAVID GONZÁLEZ GUTIÉRREZ
                </h1>
                <p className="text-2xl md:text-3xl text-cyan-300 font-semibold animate-fade-in-up animation-delay-200">
                  Ingeniero de Sistemas – Programador Senior
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-6 animate-fade-in-up animation-delay-400">
                  <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground">Bogotá, Colombia</span>
                  </div>
                  <a
                    href="tel:+573006789583"
                    className="flex items-center gap-2 glass rounded-full px-4 py-2 hover:glass-strong transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground">+57 300 678 9583</span>
                  </a>
                  <a
                    href="mailto:sebasdavgong@gmail.com"
                    className="flex items-center gap-2 glass rounded-full px-4 py-2 hover:glass-strong transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground">sebasdavgong@gmail.com</span>
                  </a>
                </div>

                <div className="flex justify-center gap-4 pt-4 animate-fade-in-up animation-delay-600">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full px-8 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    <a href={asset("CV-Sebastian-Gonzalez.pdf")} download>
                      <Download className="w-5 h-5 mr-2" />
                      Descargar CV
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="glass border-cyan-400/50 text-foreground hover:glass-strong rounded-full px-8 shadow-lg hover:shadow-magenta-500/50 transition-all duration-300"
                  >
                    <a
                      href="https://wa.me/573006789583?text=Hola%20Sebasti%C3%A1n,%20vi%20tu%20CV%20y%20quiero%20contactarte."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Contactar
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="glass-strong border-cyan-400/20 rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in">
              <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
                Perfil Profesional
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed text-center max-w-4xl mx-auto">
                Ingeniero de Sistemas con experiencia como{" "}
                <span className="text-cyan-400 font-semibold">
                  Programador Senior y Líder Técnico
                </span>
                , enfocado en el desarrollo y despliegue de soluciones tecnológicas con prioridad 
                en{" "}
                <span className="text-cyan-400 font-semibold">
                  aplicaciones con IA incorporada (automatización y chatbots)
                </span>
                , <span className="text-cyan-400 font-semibold">aplicaciones web</span>{" "}
                , <span className="text-cyan-400 font-semibold">aplicaciones móviles multiplataforma
                </span>
                y <span className="text-cyan-400 font-semibold">Realidad Virtual (VR)</span>.
                Amplia experiencia en proyectos productivos end-to-end, desde el diseño
                de arquitectura hasta el despliegue en producción. Capacidad para
                liderar equipos técnicos, coordinar con clientes y entregar soluciones
                funcionales de alto impacto.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Experiencia Profesional
            </h2>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="glass-strong border-cyan-400/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 relative h-64 md:h-auto">
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20" />
                    </div>

                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                            {job.title}
                          </h3>
                          <p className="text-xl text-foreground/80 font-semibold flex items-center gap-2">
                            <Briefcase className="w-5 h-5" />
                            {job.company}
                          </p>
                        </div>
                        <Badge className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 border-cyan-400/30 text-sm px-4 py-1">
                          {job.period}
                        </Badge>
                      </div>

                      <ul className="space-y-3">
                        {job.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/80">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Habilidades Técnicas
            </h2>

            {/* Programming Languages */}
            <Card className="glass-strong border-cyan-400/20 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center gap-3">
                <Code className="w-7 h-7" />
                Lenguajes de Programación
              </h3>
              <div className="space-y-6">
                {skills.languages.map((skill, index) => (
                  <div
                    key={index}
                    className="space-y-2"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-cyan-400" />
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 glass rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                          boxShadow:
                            hoveredSkill === skill.name
                              ? "0 0 20px rgba(0, 217, 255, 0.5)"
                              : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Frameworks & Platforms */}
            <Card className="glass-strong border-cyan-400/20 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center gap-3">
                <Globe className="w-7 h-7" />
                Frameworks y Plataformas
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.frameworks.map((framework, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
                  >
                    <h4 className="text-xl font-bold text-foreground mb-2">{framework.name}</h4>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 border-cyan-400/30">
                      {framework.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tools & Technologies */}
            <Card className="glass-strong border-cyan-400/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center gap-3">
                <Database className="w-7 h-7" />
                Herramientas y Tecnologías
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <Badge
                    key={index}
                    className="glass text-foreground border-cyan-400/30 px-4 py-2 text-base hover:glass-strong hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section className="relative py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="glass-strong border-cyan-400/20 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-center mb-8 gradient-text flex items-center justify-center gap-3">
                <GraduationCap className="w-8 h-8" />
                Educación
              </h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-cyan-300">Ingeniería de Sistemas</h3>
                <p className="text-xl text-foreground/80 font-semibold">Universidad EAN</p>
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 border-cyan-400/30">
                  2019 – Actualidad
                </Badge>
                <p className="text-foreground/70 pt-4">
                  Requisitos académicos finalizados.{" "}
                  <span className="text-cyan-400 font-semibold">En espera de expedición del título</span>.
                </p>
              </div>
            </Card>

            {/* Languages */}
            <Card className="glass-strong border-cyan-400/20 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-center mb-8 gradient-text flex items-center justify-center gap-3">
                <Languages className="w-8 h-8" />
                Idiomas
              </h2>
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Español</h3>
                  <Badge className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 border-cyan-400/30">
                    Nativo
                  </Badge>
                </div>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Inglés</h3>
                  <Badge className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 border-cyan-400/30">
                    B2 (Intermedio-Alto)
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-cyan-400/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xl text-foreground/80">
              ¿Interesado en colaborar? <span className="gradient-text font-bold">¡Conectemos!</span>
            </p>
            <div className="flex justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="glass border-cyan-400/50 text-foreground hover:glass-strong rounded-full px-8 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <a href="https://github.com/soysebasdav" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="glass border-cyan-400/50 text-foreground hover:glass-strong rounded-full px-8 shadow-lg hover:shadow-magenta-500/50 transition-all duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/sebastian-david-gonzalez-gutierrez-077890255/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
            <p className="text-sm text-foreground/50 pt-6">
              © 2026 Sebastián David González Gutiérrez. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
