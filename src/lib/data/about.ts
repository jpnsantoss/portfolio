import { Globe, LayoutGrid, Server } from "lucide-svelte";

export const services = [
  {
    title: 'Web Development',
    description: 'I develop beautiful, fast and responsive web applications.',
    tools: ['React', 'Svelte', 'Tailwind CSS', 'Next.js'],
    icon: Globe
  },
  {
    title: 'App Development',
    description: 'I create clean and user-friendly mobile and desktop applications.',
    tools: ['React Native', 'Flutter', 'Tauri', 'Eletron'],
    icon: LayoutGrid
  },
  {
    title: 'Backend Development',
    description: 'I build performant, secure and scalable backend systems.',
    tools: ['Node.js', 'Spring Boot', 'Laravel', 'Django'],
    icon: Server
  }
];

export const timeline = [
  {
    title: 'Recruit @NIAEFEUP',
    description:
      'Developer for the personal website (using SvelteKit and SpringBoot) and for the website “Time Table Scheduler” (using NextJS and Django).'
  },
  {
    title: 'Software Manager and Developer @NORASIL',
    description: 'Developer for the company’s software, mostly focused in the website and internal applications. Responsible for the host and maintenance of the software. I also work in IT support, whenever necessary.'
  },
  {
    title: 'Startup CEO @HOST&CODE',
    description: 'When I was in highschool, I decided to create a startup. The focus was to host virtual private servers, websites and game servers. It gave me a lot of experience on how to manage networks, handle customers, website development, etc..'
  },
  {
    title: 'Freelance',
    description: 'Since I was little, I have been developing some freelance work in the most varied areas, where I was able to accumulate knowledge about web development, game development, computer networks, etc...'
  },
];