const Select = ({ label, option, handleChange, value }) => {
  return (
    <section className="flex flex-col gap-y-2">
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        onChange={handleChange}
        value={value}
        className="capitalize rounded text-black focus:outline-none p-2 w-full"
      >
        <option value="">Pilih {label}</option>
        {option &&
          option.length > 0 &&
          option.map((el, i) => (
            <option key={i} value={el.value}>
              {el.value}
            </option>
          ))}
      </select>
    </section>
  );
};

export default Select;
