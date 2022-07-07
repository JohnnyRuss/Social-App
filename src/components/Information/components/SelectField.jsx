import { Devider, Text, SelectEl, OptionEl } from './InfoBlockStyled';

function SelectField({ data, caption, name, defaultField, width, field, handler }) {
  return (
    <Devider>
      {caption && <Text>{caption}</Text>}
      <SelectEl name={name} width={width} error={field === name} onChange={handler}>
        <OptionEl>{defaultField}</OptionEl>
        {data?.map((field) => (
          <OptionEl key={field} value={field}>
            {field}
          </OptionEl>
        ))}
      </SelectEl>
    </Devider>
  );
}

export default SelectField;
