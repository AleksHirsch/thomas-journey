import { FadeIn } from './fade-in'

type Choice = {
  title: string
  description: string
}

type ChoicesProps = {
  choices: Choice[]
  onChoice: (idx: number) => void
}

export const Choices = (props: ChoicesProps) => {
  return (
    <FadeIn fromY={0} className="mb-[10vh] mt-auto flex gap-4 px-10 max-lg:flex-col md:px-[10vw]">
      {props.choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => props.onChoice(index)}
          className="flex-1 space-y-4 bg-gray-800/70 p-4 text-white hover:translate-y-2 hover:bg-gray-700/90"
        >
          <span
            style={{
              fontSize: 'calc(16px + 6 * ((100vw - 320px) / 680))',
            }}
          >
            {choice.title}
          </span>
          <span
            style={{
              fontSize: 'calc(16px + 3 * ((100vw - 320px) / 680))',
            }}
            className="block text-gray-300"
          >
            {choice.description}
          </span>
        </button>
      ))}
    </FadeIn>
  )
}
