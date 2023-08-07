import axios, {AxiosInstance} from 'axios';

//criando instância de chamada para o axios
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
