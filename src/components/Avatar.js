import "./HeaderOptions.css";

function Avatar({ src }) {
  return (
    <div>
      <img src={src} alt="me" className="avatar h-[40px] w-[40px]" />
    </div>
  );
}

export default Avatar;
