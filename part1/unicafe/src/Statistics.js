import react from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ goodVote,neutralVote,badVote,allVotes,averageVotes,positiveOfAllVotes }) => {
    return (
        <tbody>
            <tr><StatisticLine text="Good" value={goodVote} /></tr>
            <tr><StatisticLine text="Neutral" value={neutralVote} /></tr>
            <tr><StatisticLine text="Bad" value={badVote} /></tr>
            <tr><StatisticLine text="All" value={allVotes} /></tr>
            <tr><StatisticLine text="Average" value={averageVotes} /></tr>
            <tr><StatisticLine text="Positive" value={positiveOfAllVotes} /></tr>
        </tbody>
    );
};

export default Statistics;
