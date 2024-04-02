import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';

export interface Post {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of post content. */
  excerpt?: string;
  /**  */
  image?: ImageMetadata | string;

  /**  */
  category?: string;
  /**  */
  tags?: Array<string>;
  /**  */
  author?: string;

  /**  */
  metadata?: MetaData;

  /**  */
  draft?: boolean;

  /**  */
  Content?: AstroComponentFactory;
  content?: string;

  /**  */
  readingTime?: number;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
<<<<<<< HEAD
  classes?: Record<string, string>;
=======
  classes?: Record<string, string | Record<string, string>>;
>>>>>>> source-4.5
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
<<<<<<< HEAD
  amount?: number;
=======
  amount?: number | string;
>>>>>>> source-4.5
  title?: string;
  icon?: string;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
}

export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
<<<<<<< HEAD
  price?: number;
=======
  price?: number | string;
>>>>>>> source-4.5
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export interface Testimonial {
  title?: string;
  testimonial?: string;
  name?: string;
  job?: string;
  image?: string | unknown;
}

export interface Input {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
}

export interface Textarea {
  label?: string;
<<<<<<< HEAD
=======
  name?: string;
>>>>>>> source-4.5
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer {
  label?: string;
}

// COMPONENTS
<<<<<<< HEAD
export interface CallToAction extends HTMLAttributes<a> {
=======
export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
>>>>>>> source-4.5
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Collapse {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
  classes?: Record<string, string>;
}

export interface Form {
  inputs?: Array<Input>;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
}

// WIDGETS
<<<<<<< HEAD
export interface Hero extends Headline, Widget {
=======
export interface Hero extends Omit<Headline,"classes">, Widget {
>>>>>>> source-4.5
  content?: string;
  image?: string | unknown;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
}

<<<<<<< HEAD
export interface Team extends Headline, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Headline, Widget {
  stats?: Array<Stat>;
}

export interface Pricing extends Headline, Widget {
  prices?: Array<Price>;
}

export interface Testimonials extends Headline, Widget {
=======
export interface Team extends Omit<Headline,"classes">, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Omit<Headline,"classes">, Widget {
  stats?: Array<Stat>;
}

export interface Pricing extends Omit<Headline,"classes">, Widget {
  prices?: Array<Price>;
}

export interface Testimonials extends Omit<Headline,"classes">, Widget {
>>>>>>> source-4.5
  testimonials?: Array<Testimonial>;
  callToAction?: CallToAction;
}

<<<<<<< HEAD
export interface Brands extends Headline, Widget {
=======
export interface Brands extends Omit<Headline,"classes">, Widget {
>>>>>>> source-4.5
  icons?: Array<string>;
  images?: Array<Image>;
}

<<<<<<< HEAD
export interface Features extends Headline, Widget {
  image?: string | unknown;
  video?: Video;
  items: Array<Item>;
  columns: number;
=======
export interface Features extends Omit<Headline,"classes">, Widget {
  image?: string | unknown;
  video?: Video;
  items?: Array<Item>;
  columns?: number;
>>>>>>> source-4.5
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

<<<<<<< HEAD
export interface Faqs extends Headline, Widget {
=======
export interface Faqs extends Omit<Headline,"classes">, Widget {
>>>>>>> source-4.5
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
}

<<<<<<< HEAD
export interface Steps extends Headline, Widget {
=======
export interface Steps extends Omit<Headline,"classes">, Widget {
>>>>>>> source-4.5
  items: Array<{
    title: string;
    description?: string;
    icon?: string;
    classes?: Record<string, string>;
  }>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
}

<<<<<<< HEAD
export interface Content extends Headline, Widget {
=======
export interface Content extends Omit<Headline,"classes">, Widget {
>>>>>>> source-4.5
  content?: string;
  image?: string | unknown;
  items?: Array<Item>;
  columns?: number;
  isReversed?: boolean;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

<<<<<<< HEAD
export interface Contact extends Headline, Form, Widget {}
=======
export interface Contact extends Omit<Headline,"classes">, Form, Widget {}
>>>>>>> source-4.5
