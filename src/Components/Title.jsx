export default function Title({ locked }) {
  return <h1 className="title">{locked ? "Max Reached" : "Fancy Counter"}</h1>;
}
