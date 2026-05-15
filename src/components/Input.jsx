// OutlinedInput.jsx
// Usage: <OutlinedInput label="Email" type="email" />

export default function OutlinedInput({ label, id, className = "",autocomplete , ...props }) {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className={`relative ${className}`}>
            <input
                id={inputId}
                autoComplete={autocomplete}
                placeholder=" "
                className="
          peer w-full px-3 pt-4 pb-2
          border-2 border-zinc-600 rounded-lg
          bg-transparent text-base text-white
          outline-none transition-colors
          focus:border-defgreen
        "
                {...props}
            />
            <label
                htmlFor={inputId}
                className="
          absolute left-3 top-1/2 -translate-y-1/2
          px-1 text-base text-zinc-400
          bg-highlight
          pointer-events-none
          transition-all duration-200 ease-in-out
          peer-focus:top-0 peer-focus:text-xs peer-focus:text-defgreen
          peer-[:not(:placeholder-shown)]:top-0
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:text-defgreen
        "
            >
                {label}
            </label>
        </div>
    );
}