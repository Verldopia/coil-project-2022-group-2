import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IContactPageProps {}

const ContactPage: React.FC<IContactPageProps> = (props) => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage('The number is' + number);
        } else {
            setMessage('No number was provided');
        }
    }, []);
    return (
        <div>
            <p>This is the Contactpage.</p>
            <p>{message}</p>
        </div>
    );
};

export default ContactPage;
