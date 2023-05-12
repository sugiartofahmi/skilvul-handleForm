const TextField = ({ label, placeholder, handleChange, value }) => {
  return (
    <section className="flex flex-col gap-y-2">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        className=" capitalize rounded text-black focus:outline-none p-1"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </section>
  );
};

export default TextField;
