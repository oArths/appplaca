import React, {useState}  from 'react';
import api from '../../services/api';
import './style.css';
// import { IMaskInput } from 'react-imask';


function PlacaInfo() {
  const [placa, setPlaca] = useState('');
  const [dadosPlaca, setDadosPlaca] = useState(null);
  const token = "0640bb4dabca4cb4e9363e498655983e";



  const consultarPlaca = async () => {
    try {
      const response = await api.get(`/${placa}/${token}`);

      // Verifique se a resposta da API foi bem-sucedida
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
        <div className='box-input'>
          <div>
            <p>Consulte sua Placa</p>
          </div>
          
          <div className='inputplaca'>
                <input
                // mask="aaa-0000"
                className='caixatexto'
                type="text"
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
                placeholder="Digite a placa do carro"
                maxLength={7}
                
                
              />
              
          </div>
          <div className="botton">
              <button onClick={consultarPlaca} onFocus={onclick}>Consultar</button>

          </div>
        </div>  
        {dadosPlaca && (
          <div>
              <h3>Informações do Carro</h3>
              <table>
                <tr>
                <td>Placa:</td>
                <td>{dadosPlaca.placa}</td>
                </tr>
                <tr>
                <td>Marca:</td>
                <td>{dadosPlaca.MARCA}</td>
                </tr>
                <tr>
                <td>Modelo:</td>
                <td>{dadosPlaca.MODELO}</td>
                </tr>
                <tr>
                <td>Cor:</td>
                <td>{dadosPlaca.cor}</td>
                </tr>
                <tr>
                <td>Ano:</td>
                <td>{dadosPlaca.ano}</td>
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
