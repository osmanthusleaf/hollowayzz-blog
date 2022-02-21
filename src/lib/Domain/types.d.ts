type Metadata = {
  date? : string;
  title: string;
  excerpt: string;
  tags: string[];
};
type Post = { metadata: Metadata; slug: string };
