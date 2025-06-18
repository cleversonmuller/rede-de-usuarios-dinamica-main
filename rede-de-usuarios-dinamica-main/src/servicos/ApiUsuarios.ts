
import axios from 'axios';

const URL_BASE_API = 'http://localhost:3001/api';

// Configuração da instância do axios
const clienteApi = axios.create({
  baseURL: URL_BASE_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptador para log de requisições
clienteApi.interceptors.request.use(
  (configuracao) => {
    console.log(`🔄 Fazendo requisição para: ${configuracao.url}`);
    return configuracao;
  },
  (erro) => {
    console.error('❌ Erro na requisição:', erro);
    return Promise.reject(erro);
  }
);

// Interceptador para log de respostas
clienteApi.interceptors.response.use(
  (resposta) => {
    console.log(`✅ Resposta recebida de: ${resposta.config.url}`);
    return resposta; 
  },
  (erro) => {
    console.error('❌ Erro na resposta:', erro);
    return Promise.reject(erro);
  }
); 

export interface DadosUsuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  empresa: string;
  cargo: string;
}

export interface UsuarioDetalhado extends DadosUsuario {
  informacoesPessoais: {
    idade: number;
    estadoCivil: string;
    nacionalidade: string;
  };
  enderecoCompleto: {
    logradouro: string;
    bairro: string;
    cep: string;
    cidade: string;
  };
  informacoesProfissionais: {
    tempoEmpresa: string;
    salario: string;
    departamento: string;
  };
}

export interface RespostaApiUsuarios {
  sucesso: boolean;
  dados: DadosUsuario[];
  total: number;
}

export interface RespostaApiUsuarioDetalhado {
  sucesso: boolean;
  dados: UsuarioDetalhado;
}

// Serviço para buscar todos os usuários
export const buscarTodosUsuarios = async (): Promise<DadosUsuario[]> => {
  try {
    const resposta = await clienteApi.get<RespostaApiUsuarios>('/usuarios');
    
    if (resposta.data.sucesso) {
      return resposta.data.dados;
    }
    
    throw new Error('Falha ao buscar usuários');
  } catch (erro) {
    console.error('Erro ao buscar usuários:', erro);
    throw new Error('Não foi possível carregar a lista de usuários. Verifique se a API está funcionando.');
  }
};

// Serviço para buscar dados detalhados de um usuário
export const buscarDadosUsuario = async (idUsuario: string): Promise<UsuarioDetalhado> => {
  try {
    const resposta = await clienteApi.get<RespostaApiUsuarioDetalhado>(`/usuarios/${idUsuario}`);
    
    if (resposta.data.sucesso) {
      return resposta.data.dados;
    }
    
    throw new Error('Usuário não encontrado');
  } catch (erro) {
    console.error(`Erro ao buscar dados do usuário ${idUsuario}:`, erro);
    
    if (axios.isAxiosError(erro) && erro.response?.status === 404) {
      throw new Error('Usuário não encontrado');
    }
    
    throw new Error('Não foi possível carregar os dados do usuário. Verifique se a API está funcionando.');
  }
};
