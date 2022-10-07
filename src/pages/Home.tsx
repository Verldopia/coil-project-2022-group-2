import React from 'react';

export interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props) => {
    return (
        <div>
            <p>This is the Homepage.</p>
        </div>
    );
};

export default HomePage;
