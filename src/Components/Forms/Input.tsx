const fixedInputClass =
  "border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ring-gray-300"

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  autofocus = false,
  placeholder,
  customClass,
}: any) {
  return (
    <div className="relative w-full mb-3">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        autoFocus={autofocus}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
        style={{ transition: "all .15s ease" }}
      />
    </div>
  );
}
/**
 * 
 * 
 * <div className="relative w-full mb-3">
                        <input type="email" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ring-gray-300" placeholder="Email" style={{ transition: "all .15s ease" }}/>
                    </div>
 * 
 */
