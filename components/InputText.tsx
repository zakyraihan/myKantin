import clsx from "clsx";

interface InputProps {
  isError?: boolean;
  messageError?: string;
  id: string | number;
  name: string;
  value: string | number | undefined;
}

const InputText: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  messageError = "wajib di isi",
  isError = false,
  id,
  name,
  value,
  ...props
}) => {
  return (
    <section>
      <input
        value={value}
        id={id}
        name={name}
        className={clsx(
          `w-[30rem] h-8 border bg-transparent rounded-full px-2 shadow-lg`,
          {
            "border-red-500 border": isError,
            "border-gray-700 border": !isError,
          }
        )}
        {...props}
      />
      {/* Render the icon if provided */}
      {isError ? (
        <p className="text-red-500 font-bold">{messageError}</p>
      ) : (
        <></>
      )}
    </section>
  );
};

export default InputText;
