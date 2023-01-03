import Input from "@/components/Input";

const Description = ({ values, handleChange }) => {
  const { description, url } = values;
  return (
    <>
      <Input
        onChange={handleChange}
        label='Szczegóły i hramonogram wydarzenia'
        id='description'
        name='description'
        value={description}
        type='textarea'
      />
      <Input
        onChange={handleChange}
        label='Link do strony z zawodami'
        id='url'
        name='url'
        value={url}
      />
      <button
        type='submit'
        style={{ display: "none" }}
        onClick={e => e.preventDefault()}
      ></button>
    </>
  );
};
export default Description;
