'use client'
export function ScrollHandler({ children}) {
  console.log(children.filter((i) => i.type == "div").map((i) => i.ref))
  for (let child in children) {
    console.log(child)
  }
  return (
    <div>
      {children}
    </div>
  );
}
