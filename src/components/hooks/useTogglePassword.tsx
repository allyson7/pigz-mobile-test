import { useState } from "react";

export function useTogglePasswordVisibility() {
  const [icon, setIcon] = useState("eye");
  const [secure, setSecure] = useState(true);

  const handlePasswordVisibility = () => {
    if (icon === "eye") {
      setIcon("eye-off");
      setSecure(!secure);
    } else if (icon === "eye-off") {
      setIcon("eye");
      setSecure(!secure);
    }
  };
  return { secure, icon, handlePasswordVisibility };
}
