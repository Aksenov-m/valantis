import { MD5 } from 'crypto-js';

const onError = (res) => {
  if (res.result !== 0) {
    return res.result;
  }
  return Promise.reject(`Ошибка: ${res.resultdescription}`);
};

export class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._password = options.password;
  }

  async get_ids(offset , limit) {
    const method = "get_ids";
    const apiKey = this.generateAuthString();

    const url = `${this._url}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth": apiKey
        },
        body: JSON.stringify({
          action: method,
          params: { offset, limit }
        })
      });

      const result = await response.json();
      return onError(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async get_items(ids) {
    const method = "get_items";
    const apiKey = this.generateAuthString();

    const url = `${this._url}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth": apiKey
        },
        body: JSON.stringify({
          action: method,
          params: { ids }
        })
      });

      const result = await response.json();
      return onError(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Функция для генерации авторизационной строки
  generateAuthString() {
    const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, ''); // Текущая дата в формате YYYYMMDD
    const authString = MD5(`${this._password}_${timestamp}`).toString();
    return authString;
  }
}

const api = new Api({
  baseUrl: "http://api.valantis.store:40000",
  password: "Valantis", // пароль для доступа к API
});

export default api;