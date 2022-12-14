import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [name,setName] = useState('')
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecie] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [pagination, setPagination] = useState(1);
  const [maximo, setMaximo] = useState();


  const nextPage = () => {
    if (page < maximo) {
      setPage(page + 1);
    } else {
      setPagination(pagination + 1);
      setPage(1);
    }
  };
  const backPage = () => {
    if (page === 1) {
      setPagination(pagination - 1);
      setPage(5);
    } else if (page >= 1) {
      setPage(page - 1);
    }
  };
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const url = `https://rickandmortyapi.com/api/character/?page=${pagination}&gender=${gender}&status=${status}&species=${species}&name=${name}`;
        const response = await axios.get(url);
        setPersonajes(response.data);
        setMaximo(response.data.results.length / perPage);
      } catch {
        console.log("Hubo un Error");
      }
    };
    getCharacters(setPersonajes);
  }, [pagination, gender, status, species,name]);





  return (
    <div className="w-screen bg-[#252525] h-screen">
      <Navbar
        handleGender={({ target }) => {
          setGender(target.value);setPagination(1);setPage(1)
        }}
        handleSpecies={({target}) => {
          setSpecie(target.value);setPagination(1);setPage(1) ;
        }}
        handleStatus={({ target }) => {
          setStatus(target.value);setPagination(1);setPage(1)
        }}
        searchName={(e) => {setName(e.target.value);setPagination(1);setPage(1)}}
        name={name}
        getHome={() => {setName('');setPagination(1);setPage(1);setGender('');setSpecie('');setStatus('')}}
      />

      {personajes.info === undefined ? (
        "Cargando..."
      ) : (
        <div className="flex flex-col items-center">

          <Card personajes={personajes} page={page} perPage={perPage} />
 
          <Pagination page={page} backPage={backPage} personajes={personajes} maximo={maximo} nextPage={nextPage} pagination={pagination} />
          <h3 className="text-center p-6 text-[20px] text-white z-50">Valentin Graglia</h3>

        </div>
        
      )}
    </div>
  );
}

export default App;
