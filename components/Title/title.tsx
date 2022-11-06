export default function Title({
  text,
  color,
  darkness,
}:{
  text:string;
  color:string;
  darkness:string;
}){
  return <h1 className={`text-5xl font-bold text-red-600`}>
    {text}
  </h1>
}