import React, {useState}  from 'react';
import api from '../../services/api';
import './style.css';

//placa -- criei um array onde armazeno as placas 
//dadosplaca -- criei um array onde armazeno os dados das placas após consultar a API
//token -- criei uma variavel chamada token onde é armazenado a chave para acessar a API 
function PlacaInfo() {
  const [placa, setPlaca] = useState('');
  const [dadosPlaca, setDadosPlaca] = useState(null);
  const token = "0879de9cb8e88914df791eae8637562f";


// essa const que faz a requisão dos dados atraves do Axios para a API utilizando as variaveis placa e token 
  const consultarPlaca = async () => {
    try {
      const response = await api.get(`/${placa}/${token}`);

      // Verifique se a resposta da API foi bem-sucedida e retorna um erro se houver(não consegui implementar o erro sem ser no inspencionar)
      if (response.status === 200) {
        setDadosPlaca(response.data);
      } else {
        console.error('Erro ao consultar a placa:', response.status);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  return (
      <div> 
            {/* aqui é o input dos dados em conjuto do output */}
          <div className='text-top'>
            <p className='titulo'>Consulte</p>
            <p>As Informações do seu carro de forma rápida e prática</p>
          </div>
        <div className='box-input'>
          <div>
            <p>Consulte sua Placa</p>
          </div>
            {/* no input que é definido que o valor insirido se chama placa */}
          <div className='inputplaca'>
                <input
                className='caixatexto'
                type="text"
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
                placeholder="Digite a placa"
                maxLength={7}
              />
          </div>  
          {/* apos clicar no botão concultar a funsão onclick usa a função consultar placa com a variavel que acabou de ser insirida */}
          <div className="botton">
              <button onClick={consultarPlaca} onFocus={onclick}><font>Consultar</font></button>
          </div>
        </div>  
        {dadosPlaca && (
          <div className='info-placa'>
              {/* aqui retorna os dados da API */}
              <h3>Informações do Carro</h3>
              <table>
                <tr>
                <td>Marca:</td>
                <td>{dadosPlaca.MARCA}</td>
                </tr>
                <tr>
                <td>Modelo:</td>
                <td>{dadosPlaca.MODELO}</td>
                </tr>
                <tr>
                <td>Restrição:</td>
                <td>{dadosPlaca.extra.restricao_1}</td>
                </tr>
                <tr>
                <td>Ano de Fabricaçâo:</td>
                <td>{dadosPlaca.extra.ano_fabricacao}</td>
                </tr>
                <tr>
                <td>Ano do Modelo:</td>
                <td>{dadosPlaca.extra.ano_modelo}</td>
                </tr>
                <tr>
                <td>Combustivel:</td>
                <td>{dadosPlaca.extra.combustivel}</td>
                </tr>
              </table>
          </div>
        )}
      </div>
  );
}

export default PlacaInfo;
