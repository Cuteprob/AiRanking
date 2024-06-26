import Markdown from 'react-markdown';

export const runtime = 'edge';

export default function MarkdownProse({ markdown, className }: { markdown: string; className?: string }) {
  return (
    <article className='prose prose-invert mx-auto max-w-pc text-black'>
      <Markdown className={className}>{markdown}</Markdown>
    </article>
  );
}
