import styled from 'styled-components';

export const BlockContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

// Form Elements
export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const InputEl = styled.input`
  height: 4rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid grey;
  outline: none;

  &:focus {
    border: 2px solid royalblue;
  }

  &::placeholder {
    text-transform: capitalize;
  }

  ${({ error }) => {
    return error
      ? `
      border: 1px solid red;
      `
      : '';
  }}
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 10rem;
  padding: 3rem 1.5rem 1rem;
  outline: none;
  border-radius: 1rem;

  &:focus {
    border: 2px solid royalblue;
  }

  ${({ error }) => {
    return error
      ? `
      border: 1px solid red;
      `
      : '';
  }}
`;

export const CheckBoxContainer = styled.div`
  ${({ direction, align }) => {
    return direction
      ? `
      flex-direction:${direction};
      align-items:flex-${align}
      `
      : '';
  }}
`;

export const CheckBoxTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const SelectEl = styled.select`
  width: 7rem;
  padding: 0.2rem;
  border-radius: 0.5rem;
  outline: none;

  &:focus {
    border: 2px solid royalblue;
  }

  ${({ width }) => {
    return width
      ? `
      width:${width};
      padding:1rem;
      `
      : '';
  }}

  ${({ error }) => {
    return error
      ? `
      border: 1px solid red;
      `
      : '';
  }}
`;

export const OptionEl = styled.option``;

export const BTN = styled.button`
  justify-self: flex-end;
  padding: 1rem 2rem;
  font-weight: 600;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.4rem;

  ${({ save }) => {
    return save
      ? `
      background:royalblue;
      color:white
      `
      : '';
  }}

  ${({ cancel }) => {
    return cancel
      ? `
      background:rgba(242, 242, 242, 1);
      color:#333
      `
      : '';
  }}
`;

export const AddBTN = styled.button`
  display: flex;
  align-items: center;
  color: royalblue;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  gap: 1rem;
  cursor: pointer;
`;

export const CalendarBox = styled.div`
  box-shadow: 1px 1px 5px;
  width: 25rem;
  aspect-ratio: 1/1;
  font-size: 1.2rem;
`;

// Reuse
export const Devider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ justify }) => {
    return justify
      ? `
      justify-content:${justify};
      color:white
      `
      : '';
  }}

  ${({ gap }) => {
    return gap
      ? `
      gap:${gap};
      `
      : '';
  }}

  ${({ direction, align }) => {
    return direction
      ? `
      flex-direction:${direction};
      align-items:flex-${align}
      `
      : '';
  }}

  ${({ border }) => {
    return border
      ? `
      border-top:5px solid red;
      `
      : '';
  }}

${({ height }) => {
    return height
      ? `
      height:${height}rem;
      `
      : '';
  }}
`;

export const Text = styled.p`
  ${({ weight }) => {
    return weight
      ? `
      font-weight:${weight};
      `
      : '';
  }}

  ${({ size }) => {
    return size
      ? `
      font-size:${size}rem;
      `
      : '';
  }}
`;

export const Title = styled.h3`
  font-size: 1.4rem;
`;

export const IconBox = styled.span`
  font-size: 2rem;
  display: flex;
  align-items: center;

  ${({ color }) => {
    return color
      ? `
      color:${color}
      `
      : '';
  }}
`;
