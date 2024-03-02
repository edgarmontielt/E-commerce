export default function ButtonUpload({ children, isPending }) {
  return (
    <button
      className={`text-white flex justify-center rounded p-3 text-sm hover:scale-x-[.995] transition duration-75 ${
        isPending ? "bg-moztaza-500/70" : "bg-moztaza-500"
      }`}
      type="submit"
    >
      {children}
    </button>
  );
}
