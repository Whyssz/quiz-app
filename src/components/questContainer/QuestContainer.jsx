export const QuestContainer = ({ children }) => {
  return (
    <div
      className="py-10 px-4
       mx-auto relative bg-white tablet:px-[25px] tablet:pt-10 tablet:pb-10 tablet:rounded-3xl min-h-[100vh] tablet:min-h-[500px]"
    >
      <span className="absolute w-11 h-1 bg-gradient-to-r from-blue-700 to-sky-500 rounded-3xl top-[17px] left-[50%] translate-x-[-50%]"></span>
      {children}
    </div>
  );
};
