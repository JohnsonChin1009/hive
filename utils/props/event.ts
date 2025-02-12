export interface EventProps {
  _id: string;
  availability: string;
  banner_alt: string;
  banner_url: string;
  date: Date;
  fee: string;
  host: string;
  time: string;
  title: string;
  url: string;
  venue: string;
  category: string;
}

export interface RawEventProps {
  title: string;
  host: string;
  date: string;
  time: string;
  venue: string;
  fee: string;
  availability: string;
  url: string;
  banner_url: string;
  banner_alt: string;
  // category: string;
}
