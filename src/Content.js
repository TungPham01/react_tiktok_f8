import { useEffect, useState } from "react";

function Content() {
  const [avatar, setAvatar] = useState();

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }

  useEffect(() => {

    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])
  return (
    <>
      <input
        type="file"
        onChange={handlePreviewAvatar}
      />
      {avatar && (
        <img src={avatar.preview} alt="ảnh" />
      )}
    </>
  );
}

export default Content;