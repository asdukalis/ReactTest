/*jshint esversion:6*/
import clients from "./db/clients.json";

  function load() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        clients ? resolve(clients) : reject("Нет данных с сервера");
      }, 3000);
    });
  }

  const myDataBases = () => {
    return clients;
  }

  load()
    .then(myDataBases)
    .catch(error => console.error(error));



export default myDataBases;