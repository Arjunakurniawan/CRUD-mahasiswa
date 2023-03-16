// 1# tanpa slate

// const Tombol = (props) => {
//   const handleTombolClick = () => {
//     alert(props.pesan);
//   };
//   return (
//     <button onClick={handleTombolClick} style={{ margin: "10px" }}>
//       {props.children}
//     </button>
//   );
// };

// const Belajar = () => {
//   return (
//     <div>
//       <h1>Belajar React js</h1>
//       <Tombol pesan="Belajar react">React</Tombol>
//       <Tombol pesan="belajar javascript">javascript</Tombol>
//     </div>
//   );
// };

// export default Belajar;

// #2 menggunakan slate

import React from "react";

const Tombol = (props) => {
  const handleTombolClick = () => {
    props.onTombolClick(props.children);
  };

  return (
    <button onClick={handleTombolClick} style={{ margin: "10px" }}>
      {props.children}
    </button>
  );
};

const Belajar = () => {
  const [judul, setJudul] = React.useState("React");

  const handleTombolClick = (judul) => {
    setJudul(judul);
  };

  return (
    <div>
      <h1>Belajar {judul}</h1>
      <Tombol onTombolClick={handleTombolClick}>react js</Tombol>
      <Tombol onTombolClick={handleTombolClick}>javascript</Tombol>
    </div>
  );
};

export default Belajar;
