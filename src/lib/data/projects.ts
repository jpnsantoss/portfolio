export interface Tool {
  id: number;
  name: string;
  projectId: number;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  tools: Tool[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Norasil - Website',
    subtitle: 'Full-stack remake of Norasil website',
    description: 'This project involved a fully custom made frontend design, an integrated admin dashboard with all crud operations, database manipulations, form data validation, authentication, image uploads and storage, etc...',
    imageUrl: 'https://imgur.com/PE28U3Y.png',
    githubUrl: 'https://github.com/jpnsantoss/NORASIL-website',
    liveUrl: 'https://norasil.vercel.app',
    createdAt: new Date(),
    updatedAt: new Date(),
    tools: [
      { id: 1, name: 'NextJS', projectId: 1 },
      { id: 1, name: 'Next-Auth', projectId: 1 },
      { id: 1, name: 'Prisma', projectId: 1 },
      { id: 1, name: 'TailwindCSS', projectId: 1 },
      { id: 1, name: 'Vercel Blob', projectId: 1 },
    ]
  },
  {
    id: 2,
    title: 'My Portfolio',
    subtitle: 'Custom made full-stack portfolio in SvelteKit.',
    description: 'The goal of this project was to learn SvelteKit, while handling authentication, form validations, image uploads, database manipulations, client emails, etc..',
    imageUrl: 'https://imgur.com/c8YqhDO.png',
    githubUrl: 'https://github.com/jpnsantoss/portfolio',
    liveUrl: 'https://jpnsantos.pt',
    createdAt: new Date(),
    updatedAt: new Date(),
    tools: [
      { id: 2, name: 'SvelteKit', projectId: 2 },
      { id: 2, name: 'AuthJS', projectId: 2 },
      { id: 2, name: 'TailwindCSS', projectId: 2 },
      { id: 2, name: 'Prisma (Accelerate)', projectId: 2 },
      { id: 2, name: 'Nodemailer', projectId: 2 },
      { id: 2, name: 'Vercel Blob', projectId: 2 }
    ]
  },
  {
    id: 3,
    title: 'Dino Game',
    subtitle: 'Chrome dino clone with some modifications.',
    description: 'This was a project for a college class, where we had to develop and test a game built in java.',
    imageUrl: 'https://github.com/jpnsantoss/LDTS-dino/raw/main/src%2Fmain%2Fresources%2Fmockups%2Fgame.gif',
    githubUrl: 'https://github.com/jpnsantoss/LDTS-dino',
    createdAt: new Date(),
    updatedAt: new Date(),
    tools: [
      { id: 3, name: 'Java', projectId: 3 },
      { id: 3, name: 'Groovy', projectId: 3 },
      { id: 3, name: 'Lanterna GUI', projectId: 3 }
    ]
  },
  {
    id: 4,
    title: 'Breadit',
    subtitle: 'This is a reddit clone.',
    description: 'Just a project I made in my spare time to learn NextJS. Contains authentication, all CRUD Operations, cache, a text-block editor, etc..',
    imageUrl: 'https://imgur.com/tZwN6ef.png',
    githubUrl: 'https://github.com/jpnsantoss/breadit',
    createdAt: new Date(),
    updatedAt: new Date(),
    tools: [
      { id: 4, name: 'NextJS', projectId: 4 },
      { id: 4, name: 'TailwindCSS', projectId: 4 },
      { id: 4, name: 'Next-Auth', projectId: 4 },
      { id: 4, name: 'Prisma', projectId: 4 },
      { id: 4, name: 'Upload Thing', projectId: 4 },
      { id: 4, name: 'Redis', projectId: 4 }
    ]
  },
  {
    id: 5,
    title: 'Netflix Clone',
    subtitle: 'Simple clone of Netflix.',
    description: 'Just a project I made in my spare time to learn NextJS and frontend design. Contains authentication, all CRUD Operations, and alot of styling.',
    imageUrl: 'https://im2.ezgif.com/tmp/ezgif-2-f9f129fed8.gif',
    githubUrl: 'https://github.com/netflix-clone',
    createdAt: new Date(),
    updatedAt: new Date(),
    tools: [
      { id: 10, name: 'Express', projectId: 5 },
      { id: 11, name: 'MongoDB', projectId: 5 }
    ]
  },
  {
    id: 6,
    title: 'Shared Prompts',
    subtitle: 'Share your creative prompts.',
    description: 'Shared Prompts is a web application that allows users to share their creative prompts and browse other users prompts.',
    imageUrl: 'https://imgur.com/feMUCt0.png',
    githubUrl: 'https://github.com/jpnsantoss/shared-prompts',
    createdAt: new Date(),
    updatedAt: new Date(),
    tools: [
      { id: 12, name: 'NextJS', projectId: 6 },
      { id: 13, name: 'Next-Auth', projectId: 6 },
      { id: 13, name: 'MongoDB', projectId: 6 },
      { id: 13, name: 'TailwindCSS', projectId: 6 },
    ]
  }
];