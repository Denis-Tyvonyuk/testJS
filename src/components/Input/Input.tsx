import { useState } from "react";

type InputData = {
  id: string;
  title: string;
  type_password: boolean;
  cleareble: boolean;
};

type InputProps = {
  Input: InputData;
};

export default function Input({
  Input: { id, title, type_password, cleareble },
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(title);

  return (
    <div className="input-item">
      <label htmlFor={`title-${id}`} aria-label={title}>
        <input
          type={type_password && !showPassword ? "password" : "text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="title"
          id={`title-${id}`}
        />
      </label>
      {type_password && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="input-button"
        >
          {showPassword ? (
            // Eye Off SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17.94 17.94A10.94 10.94 0 0112 20c-5.52 0-10-4.48-10-10a10.94 10.94 0 012.06-6.06m3.1-3.1A10.94 10.94 0 0112 4c5.52 0 10 4.48 10 10a10.94 10.94 0 01-2.06 6.06M1 1l22 22" />
            </svg>
          ) : (
            // Eye SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      )}

      {cleareble && value && (
        <button
          type="button"
          onClick={() => setValue("")}
          className="input-button"
        >
          {/* X icon (clear) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
