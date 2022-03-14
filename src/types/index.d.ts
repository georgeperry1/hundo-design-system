export type Course = {
  _id: string;
  name: string;
  thumbnail: Picture;
  'tutor-profile-picture': Picture;
  'estimated-course-completion-time': string;
  'tutor-name-s': string;
  'staking-cost': string;
  'reward-price': string;
  modules: Array<string>;
};

export type Content = {
  _id: string;
  name: string;
  thumbnail: Picture;
  'tutor-profile-picture': Picture;
  'estimated-course-completion-time': string;
  'tutor-name-s': string;
  'staking-cost': string;
  'reward-price': string;
  modules: Array<string>;
};

type Lesson = {
  'video-link': Video;
  content: string;
  name: string;
  links: string;
  modules: Array<Module>;
};

type Module = {
  moduleId: string;
  quiz: Array<any>;
  lessons: Array<Lesson>;
};

export type Picture = {
  url: string;
  alt: string;
};

export type Video = {
  url: string;
};
