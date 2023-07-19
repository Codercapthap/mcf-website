export interface PageType {
  link?: string;
  title?: string;
  component?: any;
  props?: any;
}

export interface ImageSliderType {
  src: string;
  typoLeft: string;
  typoRight: string;
  typoBottom: string;
  typoTop: string;
  typo1: string;
  typo2: string;
  link: string;
  buttonText: string;
}

export interface Project {
  likes: Number;
  author: string;
  authorLink: string;
  date: string;
  category: string;
  categoryLink: string;
  thumbnail: string;
  title: string;
  description?: string;
  link: string;
}
export interface Museum extends Project {}

export interface Livelihood extends Project {}

export interface Conservation extends Project {
  implemented?: string;
  endDate?: string;
  location?: string;
  funder?: string;
  time?: string;
  budget?: string;
  investor?: string;
  implementation?: string;
  consultant?: string;
  endTime?: string;
  studySite?: string;
  fundedBy?: string;
  fundMount?: string;
  status: string;
}

export interface Projects {
  // [index: string]: Array<Project>;
  Conservation?: Array<Conservation>;
  Livelihoods?: Array<Livelihood>;
  Museums?: Array<Museum>;
}
