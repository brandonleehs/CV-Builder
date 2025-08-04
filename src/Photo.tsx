import { useEffect, useRef, useState } from "react";

export default function Photo() {
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      throw new Error("fileInputRef is null!");
    }
  };
  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };
  useEffect(() => () => URL.revokeObjectURL(preview), [preview]);

  return (
    <section className="grid place-items-center gap-2">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={uploadImage}
      />
      <img
        src={
          preview
            ? preview
            : "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%239ca3af%22%20class%3D%22bi%20bi-camera-fill%22%20viewBox%3D%22-10%20-10%2036%2036%22%3E%3Cpath%20d%3D%22M10.5%208.5a2.5%202.5%200%201%201-5%200%202.5%202.5%200%200%201%205%200%22%2F%3E%3Cpath%20d%3D%22M2%204a2%202%200%200%200-2%202v6a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2V6a2%202%200%200%200-2-2h-1.172a2%202%200%200%201-1.414-.586l-.828-.828A2%202%200%200%200%209.172%202H6.828a2%202%200%200%200-1.414.586l-.828.828A2%202%200%200%201%203.172%204zm.5%202a.5.5%200%201%201%200-1%20.5.5%200%200%201%200%201m9%202.5a3.5%203.5%200%201%201-7%200%203.5%203.5%200%200%201%207%200%22%2F%3E%3C%2Fsvg%3E"
        }
        alt="image preview"
        className="h-18 w-18 cursor-pointer rounded-full bg-gray-100"
        onClick={handleClick}
      />
      <p
        className="cursor-pointer text-sm text-orange-500"
        onClick={handleClick}
      >
        Add Photo
      </p>
    </section>
  );
}
