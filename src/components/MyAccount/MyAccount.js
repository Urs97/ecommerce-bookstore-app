import React, { useEffect } from 'react';
import './MyAccount.scss';
import PageHeader from '../PageHeader/PageHeader';

function MyAccount() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <main>
            <PageHeader title="My Account" color="green"/>
        </main>
    )
};

export default MyAccount;
