import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

export function SEO({ title, description, image, type = "website" }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}