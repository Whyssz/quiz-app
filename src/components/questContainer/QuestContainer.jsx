export const QuestContainer = ({ children }) => {
  return (
    <div className="container result-box mx-auto relative bg-white px-[25px] pt-12 pb-10  rounded-3xl min-h-[500px]">
      <span className="absolute w-11 h-1 bg-gradient-to-r from-blue-700 to-sky-500 rounded-3xl top-[3.5%] left-[50%] translate-x-[-50%]"></span>
      {children}
    </div>
  );
};
