import React from "react";
import styles from './Header.module.css'

const getGreeting = () => {
    const hour = new Date().getHours();
    if( hour < 12 ) {
        return 'Good Morning.';
    }else if( hour < 18 ) {
        return 'Good Afternoon.';
    }else {
        return 'Good Evening.';  
    }
};

const Header = () => {

    const greeting = getGreeting();

     return (
        <header className= {styles.header}>
            <div className= {styles.container}>
                <h1 className= {styles.logo}>Expense Tracker</h1>
                <p className= {styles.greeting}>{greeting}!</p>
            </div>
        </header>
     );
};
export default Header;