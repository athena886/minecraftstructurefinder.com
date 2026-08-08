import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideBySlug, structureGuides } from "../structure-guides";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return structureGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/${guide.slug}/` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `/${guide.slug}/`,
      siteName: "Minecraft Structure Finder",
      type: "article",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Minecraft Structure Finder interactive coordinate map" }],
    },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: ["/og.png"] },
  };
}

export default async function StructureGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) notFound();

  const pageUrl = `https://minecraftstructurefinder.com/${guide.slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: guide.title,
        description: guide.description,
        isPartOf: { "@id": "https://minecraftstructurefinder.com/#website" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Minecraft Structure Finder", item: "https://minecraftstructurefinder.com/" },
          { "@type": "ListItem", position: 2, name: `${guide.name} Finder`, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Minecraft Structure Finder home">
          <span className="brand-block" aria-hidden="true" />
          <span>Structure Finder</span>
        </Link>
        <Link className="header-cta" href="/#search-form">Search a seed</Link>
      </header>

      <article className="guide-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Minecraft Structure Finder</Link><span aria-hidden="true">/</span><span>{guide.name} Finder</span>
        </nav>

        <header className="guide-hero">
          <div>
            <p className="eyebrow">{guide.eyebrow}</p>
            <h1>{guide.title}</h1>
            <p className="guide-lede">{guide.intro}</p>
            <Link className="guide-primary" href="/#search-form">Find {guide.name} coordinates</Link>
          </div>
          <div className="guide-emblem" aria-hidden="true"><span>{guide.icon}</span></div>
        </header>

        <dl className="quick-facts">
          {guide.quickFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>

        <div className="guide-content">
          <div className="guide-article">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}

            <section className="guide-faq" aria-labelledby="guide-faq-heading">
              <p className="eyebrow">Common questions</p>
              <h2 id="guide-faq-heading">{guide.name} finder FAQ</h2>
              {guide.faq.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
            </section>
          </div>

          <aside className="guide-sidebar">
            <strong>Search this Minecraft seed</strong>
            <p>Open the complete map, select your version and dimension, then compare exact structure coordinates.</p>
            <Link href="/#search-form">Open the structure finder →</Link>
            <div className="related-guides">
              <span>Related guides</span>
              {structureGuides.filter((item) => item.slug !== guide.slug).map((item) => (
                <Link key={item.slug} href={`/${item.slug}/`}>{item.icon} {item.name} Finder</Link>
              ))}
            </div>
          </aside>
        </div>
      </article>

      <footer>
        <p><strong>Minecraft Structure Finder</strong> is independent and is not affiliated with Mojang or Microsoft.</p>
        <p><Link href="/">Find Minecraft structures by seed</Link></p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </main>
  );
}
