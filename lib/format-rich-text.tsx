import React from 'react';

export function formatRichText(text: string): React.ReactNode[] {
  return text.split('\n').map((line, lineIndex) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);

    return (
      <React.Fragment key={lineIndex}>
        {parts.map((part, partIndex) => {
          const isBold = part.startsWith('**') && part.endsWith('**');

          if (isBold) {
            return (
              <strong key={partIndex} className="font-semibold text-ink">
                {part.slice(2, -2)}
              </strong>
            );
          }

          return <React.Fragment key={partIndex}>{part}</React.Fragment>;
        })}
        {lineIndex < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    );
  });
}