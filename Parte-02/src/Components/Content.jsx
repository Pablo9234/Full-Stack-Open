import { Part } from './Part';

export function Content({ parts  }) {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
}