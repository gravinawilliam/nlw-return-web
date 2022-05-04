import { CloseButton } from '../../CloseButton';
import { FeedbackType, feedbackTypes } from '../index';

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
};

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  return (
    <>
      {' '}
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([type, { title, image }]) => (
          <button
            key={type}
            type="button"
            onClick={() => props.onFeedbackTypeChanged(type as FeedbackType)}
            className="bg-zinc-800 rounded-lg p-5 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={image.source} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
