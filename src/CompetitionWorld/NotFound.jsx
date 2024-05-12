import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


function NotFound() {

  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowWelcomeMessage(false);
    }, 3000);

    // Clear timer on component unmount
    return () => clearTimeout(timer);
}, []); 

  return (
    <div>
      {showWelcomeMessage && (
                <Alert variant="failed">This page does not exist!</Alert>
            )}
    </div>
  )
}

export default NotFound