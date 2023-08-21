import { StyledHeading } from './Section.styled';

export const Section = ({ title, children }) => (
  <section>
    <StyledHeading>{title}</StyledHeading>
    {children}
  </section>
);
