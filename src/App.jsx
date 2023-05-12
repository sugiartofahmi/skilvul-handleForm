import TextField from "./components/TextField";
import Select from "./components/Select";
import Button from "./components/Button";
import { DataJurusan } from "./helper/DataJurusan";
import { useEffect, useState } from "react";

const App = () => {
  const [nama, setNama] = useState("");
  const [univ, setUniv] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [minat, setMinat] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [DataMinat, setDataMinat] = useState([]);

  useEffect(() => {
    jurusan == "Informatika"
      ? setDataMinat(DataJurusan[0].minat)
      : jurusan == "Industri"
      ? setDataMinat(DataJurusan[1].minat)
      : jurusan == "Elektro" && setDataMinat(DataJurusan[2].minat);
  }, [jurusan]);

  const validate = () => {
    return (
      nama != "" && univ != "" && alamat != "" && jurusan != "" && minat != ""
    );
  };

  const clearForm = () => {
    setErrorMsg(""),
      setNama(""),
      setUniv(""),
      setAlamat(""),
      setMinat(""),
      setJurusan(""),
      setError(!error),
      setErrorMsg("");
  };

  const handleSubmit = () => {
    validate()
      ? (console.log({
          nama,
          univ,
          alamat,
          jurusan,
          minat,
        }),
        clearForm())
      : (setError(!error), setErrorMsg("Data tidak boleh kosong"));
  };

  return (
    <section className="flex w-full h-screen justify-center items-center bg-[#3b4242]">
      <section className="bg-[#2C3333] w-[70vh] h-[90vh] rounded-lg p-5 text-white flex flex-col justify-around items-center gap-y-5">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Survey Form</h1>

          {error && (
            <h1 className="text-lg font-bold text-red-500">{errorMsg}</h1>
          )}
        </section>

        <section className="flex flex-col gap-y-5 w-full">
          <TextField
            value={nama}
            handleChange={(e) => setNama(e.target.value)}
            placeholder="Masukan nama anda"
            label="Nama"
          />
          <TextField
            value={univ}
            handleChange={(e) => setUniv(e.target.value)}
            placeholder="Masukan asal universitas"
            label="Universitas"
          />
          <TextField
            value={alamat}
            handleChange={(e) => setAlamat(e.target.value)}
            placeholder="Masukan alamat anda"
            label="Alamat"
          />
          <Select
            handleChange={(e) => setJurusan(e.target.value)}
            value={jurusan}
            label="Jurusan"
            option={DataJurusan}
          />
          <Select
            handleChange={(e) => setMinat(e.target.value)}
            value={minat}
            label="Minat"
            option={DataMinat}
          />
        </section>
        <Button handleClick={handleSubmit} text="Submit" />
      </section>
    </section>
  );
};

export default App;
