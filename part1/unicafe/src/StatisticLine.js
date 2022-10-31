import react from 'react';

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
        <td>{text}</td>
        {text === 'Positive' ? <td>{value} %</td> : <td>{value}</td>}
        </tr>
    );
    };

export default StatisticLine;
