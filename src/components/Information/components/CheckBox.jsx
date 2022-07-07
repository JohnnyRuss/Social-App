import { CheckBoxContainer, CheckBoxTitle, Devider, InputEl } from './InfoBlockStyled';

function CheckBox({ type = 'checkbox', handler, boxes, title, checked, height, field }) {
  return (
    <CheckBoxContainer>
      <CheckBoxTitle>{title}</CheckBoxTitle>
      {boxes?.map((box, i) => (
        <Devider key={`${box?.name}:${i}`} height={height}>
          <InputEl
            type={type}
            name={box?.name}
            id={box.id}
            value={box.value}
            defaultChecked={checked}
            onClick={handler}
            error={box?.name === field}
          />
          <label htmlFor={box.id}>
            <strong>{box.caption}</strong>
          </label>
        </Devider>
      ))}
    </CheckBoxContainer>
  );
}

export default CheckBox;
