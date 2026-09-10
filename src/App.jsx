import React from "react";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { technologies } from "./data/technologies";
import { statistics } from "./data/statistics";
import { feedback } from "./data/feedback";
import { ProfileHeader } from "./components/ProfileHeader";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <div className="background" aria-hidden="true">
        <div className="dots" />
        <div className="overlay" />
      </div>
      <div className="page">
        <ProfileHeader profile={profile} />
        <main>
          <div className="content-grid">
            <Projects projects={projects} />
            <Sidebar
              profile={profile}
              technologies={technologies}
              statistics={statistics}
              feedback={feedback}
            />
          </div>
          <Contact />
        </main>
        <footer>
          Perfil profissional · dados editáveis em <code>src/data</code>
        </footer>
      </div>
    </>
  );
}
