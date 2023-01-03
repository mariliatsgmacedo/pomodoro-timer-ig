import { HistoryContainer, HistoryList, Status } from './style'

export const History = () => {
  return (
    <HistoryContainer>
      <p>Historico</p>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
