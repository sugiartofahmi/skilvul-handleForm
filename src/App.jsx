import TextField from "./components/TextField";
import Select from "./components/Select";
import Button from "./components/Button";
import { DataJurusan } from "./helper/DataJurusan";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    nama: "",
    univ: "",
    alamat: "",
    jurusan: "",
    minat: "",
  });
  const [error, setError] = useState({ error: false, errorMsg: "" });
  const [DataMinat, setDataMinat] = useState([]);

  useEffect(() => {
    user.jurusan == "Informatika"
      ? setDataMinat(DataJurusan[0].minat)
      : user.jurusan == "Industri"
      ? setDataMinat(DataJurusan[1].minat)
      : user.jurusan == "Elektro" && setDataMinat(DataJurusan[2].minat);
  }, [user.jurusan]);

  const validate = () => {
    return (
      user.nama != "" &&
      user.univ != "" &&
      user.alamat != "" &&
      user.jurusan != "" &&
      user.minat != ""
    );
  };

  const clearForm = () => {
    setUser({
      nama: "",
      univ: "",
      alamat: "",
      jurusan: "",
      minat: "",
    });
    setError({ error: false, errorMsg: "" });
  };

  const handleSubmit = () => {
    validate()
      ? (console.log(user), clearForm())
      : setError({
          errorMsg: "Data tidak boleh kosong",
          error: !error.error,
        });
  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <section className="flex w-full h-screen justify-center items-center bg-[#3b4242]">
      <section className="bg-[#2C3333] w-[70vh] h-[90vh] rounded-lg p-5 text-white flex flex-col justify-around items-center gap-y-5">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Survey Form</h1>

          {error.error && (
            <h1 className="text-lg font-bold text-red-500">{error.errorMsg}</h1>
          )}
        </section>

        <section className="flex flex-col gap-y-5 w-full">
          <TextField
            value={user.nama}
            handleChange={handleInput}
            placeholder="Masukan nama anda"
            label="nama"
          />
          <TextField
            value={user.univ}
            handleChange={handleInput}
            placeholder="Masukan asal universitas"
            label="univ"
          />
          <TextField
            value={user.alamat}
            handleChange={handleInput}
            placeholder="Masukan alamat anda"
            label="alamat"
          />
          <Select
            value={user.jurusan}
            handleChange={handleInput}
            label="jurusan"
            option={DataJurusan}
          />
          <Select
            value={user.minat}
            handleChange={handleInput}
            label="minat"
            option={DataMinat}
          />
        </section>
        <Button handleClick={handleSubmit} text="Submit" />
      </section>
    </section>
  );
};

export default App;
