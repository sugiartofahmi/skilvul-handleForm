const TextField = ({ label, placeholder, handleChange, value }) => {
  return (
    <section className="flex flex-col gap-y-2 capitalize">
      <label htmlFor="name ">{label}</label>
      <input
        type="text"
        name={label}
        className=" capitalize rounded text-black focus:outline-none p-1"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </section>
  );
};

export default TextField;
