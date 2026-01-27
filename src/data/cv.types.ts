export type CvRole = {
  title: string;
  dates: string;
};

export type CvPersonalProject = {
  name: string;
  href?: string;
  description?: string;
  skills?: string[];
};

export type CvTextWithSkills = {
  text: string;
  skills?: string[];
};

export type CvBullet = string | CvTextWithSkills | CvPersonalProject;

export type CvSection = {
  heading: string;
  bullets: CvBullet[];
};

export type CvExperience = {
  company: string;
  project?: {
    title: string;
    summary?: string;
  };
  roles: CvRole[];
  sections?: CvSection[];
  bullets?: CvBullet[];
};

export type CvEducation = {
  school: string;
  dates: string;
  program: string;
  details?: string;
  modules?: string;
};

export type CvHeader = {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
};

export type CvProfessionalSkills = {
  citizenship: string;
  languages: string;
  software: string;
  associations: string;
  certifications: string;
};

export type CvData = {
  header: CvHeader;
  summaryHtml: string;
  experience: CvExperience[];
  personalProjects: CvBullet[];
  education: CvEducation[];
  professionalSkills: CvProfessionalSkills;
  references: string;
};
