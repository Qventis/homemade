'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

// Types pour les composants MDX
type MdxComponentsType = MDXRemoteProps['components'];

// Styles pour les différents éléments MDX
const styles = {
  // Titres
  h1: 'text-3xl font-bold font-display text-qventis-gray-900 my-6',
  h2: 'text-2xl font-bold font-display text-qventis-gray-900 mt-10 mb-4',
  h3: 'text-xl font-bold font-display text-qventis-gray-900 mt-8 mb-4',
  h4: 'text-lg font-bold font-display text-qventis-gray-900 mt-6 mb-3',
  
  // Paragraphe
  p: 'text-qventis-gray-700 my-4 leading-relaxed',
  
  // Listes
  ul: 'list-disc pl-6 my-4 space-y-2 text-qventis-gray-700',
  ol: 'list-decimal pl-6 my-4 space-y-2 text-qventis-gray-700',
  li: 'pl-2',
  
  // Citation
  blockquote: 'border-l-4 border-qventis-coral pl-4 italic my-6 text-qventis-gray-600',
  
  // Code
  pre: 'bg-qventis-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6',
  code: 'font-mono text-sm',
  inlineCode: 'bg-qventis-gray-100 text-qventis-coral px-1.5 py-0.5 rounded font-mono text-sm',
  
  // Liens
  a: 'text-qventis-coral hover:underline transition-colors',
  
  // Images
  img: 'rounded-lg my-6 max-w-full',
  
  // Tableaux
  table: 'min-w-full my-6 border-collapse',
  th: 'bg-qventis-gray-100 border border-qventis-gray-300 px-4 py-2 text-left font-bold',
  td: 'border border-qventis-gray-300 px-4 py-2',
  
  // Séparateur
  hr: 'my-8 border-qventis-gray-300',
};

// Composants MDX personnalisés
export const mdxComponents: MdxComponentsType = {
  h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
  h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
  h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
  h4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
  p: ({ children }) => <p className={styles.p}>{children}</p>,
  ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
  ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
  li: ({ children }) => <li className={styles.li}>{children}</li>,
  blockquote: ({ children }) => <blockquote className={styles.blockquote}>{children}</blockquote>,
  pre: ({ children }) => <pre className={styles.pre}>{children}</pre>,
  code: ({ children, className }) => {
    // Pour code block avec ``` ```
    if (className) {
      return <code className={`${styles.code} ${className}`}>{children}</code>;
    }
    // Pour inline code avec `code`
    return <code className={styles.inlineCode}>{children}</code>;
  },
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return <a href={href} className={styles.a} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <Link href={href || '#'} className={styles.a}>{children}</Link>;
  },
  img: ({ src, alt, width, height }) => {
    if (!src) return null;
    
    return (
      <div className="relative w-full h-96 my-6">
        <Image 
          src={src} 
          alt={alt || ''} 
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  },
  table: ({ children }) => <div className="overflow-x-auto"><table className={styles.table}>{children}</table></div>,
  th: ({ children }) => <th className={styles.th}>{children}</th>,
  td: ({ children }) => <td className={styles.td}>{children}</td>,
  hr: () => <hr className={styles.hr} />,
  
  // Composants personnalisés spécifiques à Qventis
  Callout: ({ children, type = 'info' }) => {
    const bgColors = {
      info: 'bg-blue-50 border-blue-500',
      warning: 'bg-yellow-50 border-yellow-500',
      error: 'bg-red-50 border-red-500',
      success: 'bg-green-50 border-green-500',
    };
    
    return (
      <div className={`${bgColors[type as keyof typeof bgColors]} border-l-4 p-4 my-6 rounded-r-lg`}>
        {children}
      </div>
    );
  },
  
  CodeBlock: ({ children, language = 'javascript' }) => {
    return (
      <div className="relative">
        <div className="absolute top-0 right-0 bg-qventis-gray-800 text-xs text-white px-2 py-0.5 rounded-bl">
          {language}
        </div>
        <pre className={styles.pre}>
          <code className={`language-${language}`}>{children}</code>
        </pre>
      </div>
    );
  }
};

// Composant pour rendre le contenu MDX
export function MDXContent({ source }: { source: any }) {
  const components = useMemo(() => mdxComponents, []);
  return <MDXRemote {...source} components={components} />;
}
