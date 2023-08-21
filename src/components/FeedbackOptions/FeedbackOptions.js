import { OptionBtn, StyledWrapper } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <StyledWrapper>
    {options.map(option => (
      <OptionBtn
        key={option}
        option={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </OptionBtn>
    ))}
  </StyledWrapper>
);
