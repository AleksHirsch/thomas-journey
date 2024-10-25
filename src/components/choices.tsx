import { FadeIn } from "./fade-in";

type Choice = {
  title: string;
  description: string;
};

type ChoicesProps = {
  choices: Choice[];
  onChoice: (idx: number) => void;
};

export const Choices = (props: ChoicesProps) => {
  return (
    <FadeIn fromY={0} className="flex gap-4 mt-auto mb-10 px-10">
      {props.choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => props.onChoice(index)}
          className="flex-1 hover:translate-y-2 bg-gray-800/70 space-y-4 text-white hover:bg-gray-700/90 p-4"
        >
          <span className="text-xl">{choice.title}</span>
          <span className="block text-sm text-gray-300">
            {choice.description}
          </span>
        </button>
      ))}
    </FadeIn>
  );
};
