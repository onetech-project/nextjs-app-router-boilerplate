import Timeline from '../components/Timeline';
import projects from '../../public/data/projects.json';

export default function Projects() {
  return (
    <div className="px-6">
      {/* <h1 className="text-5xl font-bold text-white text-center mt-8">My Projects</h1> */}
      <Timeline projects={projects} />
    </div>
  );
}
