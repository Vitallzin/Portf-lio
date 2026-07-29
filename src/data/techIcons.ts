import type { IconType } from 'react-icons'
import { FaAws, FaJava } from 'react-icons/fa'
import {
  SiAxios,
  SiCss,
  SiDocker,
  SiEslint,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiReactrouter,
  SiRender,
  SiSqlite,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si'
import nodemailer from '../assets/Nodemailer.webp'

const techIcons: Record<string, IconType> = {
  react: SiReact,
  'react router': SiReactrouter,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  vite: SiVite,
  'node.js': SiNodedotjs,
  express: SiExpress,
  jwt: SiJsonwebtokens,
  prisma: SiPrisma,
  java: FaJava,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  figma: SiFigma,
  postman: SiPostman,
  vercel: SiVercel,
  render: SiRender,
  aws: FaAws,
  firebase: SiFirebase,
  firestore: SiFirebase,
  eslint: SiEslint,
  axios: SiAxios,
  'framer motion': SiFramer,
}

// Fallback pra tecnologias sem ícone disponível na biblioteca react-icons.
const techImageIcons: Record<string, string> = {
  nodemailer,
}

export function getTechIcon(name: string): IconType | null {
  return techIcons[name.trim().toLowerCase()] ?? null
}

export function getTechImage(name: string): string | null {
  return techImageIcons[name.trim().toLowerCase()] ?? null
}
