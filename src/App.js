function App() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="text-2xl font-bold">Football Database - CMPS 277</div>
      <div className="text-xl ">Spring 2022</div>
      <div className="text-center my-8">
        Mohamed Louai Bouzaher <br />
        Bilal Wehbi <br />
        Mario Sassine <br />
        Firas Noun <br />
      </div>
      <div className="text-center my-8">Prof. Maurice Khabbaz</div>
      <br />
      <br />
      <div className="text-xl my-1 font-bold">Notes</div>
      <div>
        - Before adding a new player, you need to add both his/her club and
        national team. <br />
        - Before adding a new coach, you need to add a team. <br />
        - Before adding a new match, you need to add a referee. <br />
        - Before adding a new champion, you need to add a team and a league.{" "}
        <br />
        - You cannot delete a referee if he/she refereed a match in one of the
        leagues. <br />
      </div>
    </div>
  );
}

export default App;
